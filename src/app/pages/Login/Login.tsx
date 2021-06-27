import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import AppIcon from '../../components/Icons/AppIcon';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import useMutation from '../../hooks/useMutation';
import { loginUser } from '../../utils/api';
import styles from './Login.module.css';

function Login(): JSX.Element {
  const history = useHistory();
  const { mutate, isLoading, errorMessage } = useMutation(loginUser, {
    onSuccess: () => {
      history.push('/');
    },
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    mutate({ email, password });
  }

  return (
    <div className={styles.container}>
      <header>
        <AppIcon />
      </header>
      <img src="/fadeOverlay.png" alt="" className={styles.fadeOverlay} />
      <main className={styles.main}>
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
          <Button disabled={isLoading}>Login</Button>
          {errorMessage && <ErrorMessage>Error: {errorMessage}</ErrorMessage>}
        </form>
      </main>
      <footer>
        {/* <SocialLogins /> */}
        <p className={styles.hint}>Don't have an account?</p>
        <Link to="/register">Register</Link>
      </footer>
    </div>
  );
}

export default Login;
