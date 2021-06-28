import { User } from '../../types';

async function jsonFetch<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  return await response.json();
}

export async function postUser(user: User): Promise<User> {
  return await jsonFetch<User>('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
}

type UserCredentials = Required<Pick<User, 'email' | 'password'>>;
export async function loginUser(credentials: UserCredentials): Promise<User> {
  return await jsonFetch<User>('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
}

export async function uploadAvatar(imageFile: File): Promise<User> {
  const formData = new FormData();
  formData.append('file', imageFile);
  formData.append('upload_preset', 'llo9r91u');

  const cloudinaryResponse = await fetch(
    'https://api.cloudinary.com/v1_1/dzegtb57h/upload',
    {
      method: 'POST',
      body: formData,
    }
  );
  const cloudinaryResult = await cloudinaryResponse.json();
  return await jsonFetch<User>('/api/users/me', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      imgSrc: cloudinaryResult.secure_url,
    }),
  });
}
