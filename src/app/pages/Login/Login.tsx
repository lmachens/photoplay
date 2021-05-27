import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import AppIcon from '../../components/Icons/AppIcon';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import styles from './Login.module.css';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Fake login with ${email}:${password}`);
  }

  return (
    <div className={styles.container}>
      <header>
        <AppIcon />
      </header>
      <main>
        <form onSubmit={handleSubmit} className={styles.form}>
          <LabeledInput
            label="Email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
            type="email"
            required
          />
          <LabeledInput
            label="Password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            type="password"
            required
          />
          <Button>Login</Button>
        </form>
      </main>
      <footer>
        {/* <SocialLogins /> */}
        <p className={styles.hint}>Don't have an account?</p>
        <a href="#">Register</a>
      </footer>
    </div>
  );
}

export default Login;
