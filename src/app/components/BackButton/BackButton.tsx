import React from 'react';
import styles from './BackButton.module.css';

function BackButton(): JSX.Element {
  return (
    <a className={styles.backButton} href="#">
      <span className={styles.backArrow}>&lt;</span>
      Back
    </a>
  );
}

export default BackButton;
