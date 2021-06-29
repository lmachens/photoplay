import React from 'react';
import styles from './ErrorMessage.module.css';

type ErrorMessageProps = {
  children: React.ReactNode;
};
function ErrorMessage({ children }: ErrorMessageProps): JSX.Element {
  return <strong className={styles.error}>{children}</strong>;
}

export default ErrorMessage;
