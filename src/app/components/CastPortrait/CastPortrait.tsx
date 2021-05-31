import React from 'react';
import styles from './CastPortrait.module.css';

type CastPortraitProps = {
  imgSrc: string;
  firstName: string;
  lastName: string;
};

function CastPortrait({
  imgSrc,
  firstName,
  lastName,
}: CastPortraitProps): JSX.Element {
  return (
    <div className={styles.castPortrait}>
      <div className={styles.castPortrait__vignette}>
        <img className={styles.castPortrait__image} src={imgSrc} alt="" />
      </div>
      <h1 className={styles.castPortrait__firstName}>{firstName}</h1>
      <h2 className={styles.castPortrait__lastName}>{lastName}</h2>
    </div>
  );
}

export default CastPortrait;
