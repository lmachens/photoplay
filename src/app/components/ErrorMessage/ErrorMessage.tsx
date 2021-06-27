import React from 'react';
import styles from './ErrorMessage.module.css';

type ErrorMessageProps = {
  children: React.ReactNode;
};
function ErrorMessage({ children }: ErrorMessageProps): JSX.Element {
  return <div className={styles.error}>{children}</div>;
}

export default ErrorMessage;
