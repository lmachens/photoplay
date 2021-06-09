import React from 'react';
import styles from './Button.module.css';

function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
): JSX.Element {
  return <button className={styles.button} {...props} />;
}

export default Button;
