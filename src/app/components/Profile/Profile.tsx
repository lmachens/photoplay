import React, { useState } from 'react';
import EditProfile from './EditProfile';
import ViewProfile from './ViewProfile';

export type ProfileProps = {
  firstName: string;
  lastName: string;
  yearOfBirth: number;
};

function Profile({
  firstName,
  lastName,
  yearOfBirth,
}: ProfileProps): JSX.Element {
  const [isEditMode, setIsEditMode] = useState(false);

  function saveProfile(profile: {
    firstName: string;
    lastName: string;
    yearOfBirth: number;
  }) {
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  return (
    <div>
      <button onClick={() => setIsEditMode(!isEditMode)}>Toggle</button>
      <div>
        {isEditMode ? (
          <EditProfile
            initialFirstName={firstName}
            initialLastName={lastName}
            initialYearOfBirth={yearOfBirth}
            onSave={saveProfile}
          />
        ) : (
          <ViewProfile
            firstName={firstName}
            lastName={lastName}
            yearOfBirth={yearOfBirth}
          />
        )}
      </div>
    </div>
  );
}

export default Profile;
