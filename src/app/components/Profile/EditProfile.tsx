import React, { useState } from 'react';

type EditProfileProps = {
  initialFirstName: string;
  initialLastName: string;
  initialYearOfBirth: number;
  onSave: (profile: {
    firstName: string;
    lastName: string;
    yearOfBirth: number;
  }) => void;
};
function EditProfile({
  initialFirstName,
  initialLastName,
  initialYearOfBirth,
  onSave,
}: EditProfileProps): JSX.Element {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [yearOfBirth, setYearOfBirth] = useState(initialYearOfBirth);

  return (
    <>
      <label>
        FirstName:{' '}
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label>
        LastName:{' '}
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label>
        Year of birth:{' '}
        <input
          type="number"
          value={yearOfBirth}
          onChange={(event) => setYearOfBirth(+event.target.value)}
        />
      </label>
      <button
        onClick={() =>
          onSave({
            firstName,
            lastName,
            yearOfBirth,
          })
        }
      >
        Save
      </button>
    </>
  );
}

export default EditProfile;
