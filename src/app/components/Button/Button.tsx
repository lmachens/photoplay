import React from 'react';
import styles from './Button.module.css';

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

function Button({ children, disabled, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
