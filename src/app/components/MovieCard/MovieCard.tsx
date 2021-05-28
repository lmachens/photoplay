import React from 'react';
import styles from './MovieCard.module.css';

type CardProps = {
  imgSrc: string;
};

function MovieCard({ imgSrc }: CardProps): JSX.Element {
  return (
    <div>
      <img className={styles.image} src={imgSrc} alt="" />
    </div>
  );
}

export default MovieCard;
