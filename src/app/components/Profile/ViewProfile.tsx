import React from 'react';

export type ViewProfileProps = {
  firstName: string;
  lastName: string;
  yearOfBirth: number;
};

function ViewProfile({
  firstName,
  lastName,
  yearOfBirth,
}: ViewProfileProps): JSX.Element {
  return (
    <>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{yearOfBirth}</p>
    </>
  );
}

export default ViewProfile;
