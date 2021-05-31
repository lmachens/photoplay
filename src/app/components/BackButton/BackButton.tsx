import React from 'react';
import { useHistory } from 'react-router';
import styles from './BackButton.module.css';

function BackButton(): JSX.Element {
  const history = useHistory();

  return (
    <button className={styles.backButton} onClick={() => history.goBack()}>
      <span className={styles.backArrow}>&lt;</span>
      Back
    </button>
  );
}

export default BackButton;
