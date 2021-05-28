import React, { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import AppIcon from '../../components/Icons/AppIcon';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import styles from './ForgotPassword.module.css';

function ForgotPassword(): JSX.Element {
  const [email, setEmail] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`We'll send you new password to ${email}`);
  }

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.backButton}>
          <BackButton />
        </div>
        <AppIcon />
      </header>
      <main className={styles.main}>
        <h2 className={styles.heading}>Forgot password?</h2>
        <p className={styles.text}>
          Enter the email address you used to create your account and we will
          email you a link to reset your password
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <LabeledInput
            label="Email"
            placeholder="email"
            value={email}
            onChange={setEmail}
            type="email"
            required
          />
          <Button>Send Email</Button>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
