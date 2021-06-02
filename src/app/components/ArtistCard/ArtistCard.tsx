import React from 'react';
import styles from './ArtistCard.module.css';

type CardProps = {
  imgSrc: string;
  artistName: string;
};

function ArtistCard({ imgSrc, artistName }: CardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.container__image} src={imgSrc} alt="" />
      <span className={styles.container__name}>{artistName}</span>
    </div>
  );
}

export default ArtistCard;
