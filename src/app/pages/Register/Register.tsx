import React, { useState } from 'react';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import styles from './Register.module.css';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import ProfilePictureIcon from '../../components/Icons/ProfilePictureIcon';

function RegisterForm(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`${firstName} submitted`);
  }

  return (
    <div className={styles.registerForm}>
      <header className={styles.registerForm__header}>
        <BackButton />
        <ProfilePictureIcon className={styles.registerForm__icon} />

        <a href="#" className={styles.registerForm__link}>
          Add profile picture
        </a>
      </header>
      <main className={styles.registerForm__main}>
        <form className={styles.registerForm__form} onSubmit={handleSubmit}>
          <LabeledInput
            label="First Name"
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={setFirstName}
            required
          />
          <LabeledInput
            label="Last Name"
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={setLastName}
            required
          />
          <LabeledInput
            label="Email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={setEmail}
            required
          />

          <LabeledInput
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
            required
          />

          <LabeledInput
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            required
          />

          <Button>Register</Button>
        </form>
      </main>
    </div>
  );
}

export default RegisterForm;
