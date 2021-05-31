import React from 'react';
import styles from './MovieCard.module.css';

type CardProps = {
  imgSrc: string;
};

function MovieCard({ imgSrc }: CardProps): JSX.Element {
  return (
    <img
      className={styles.image}
      src={imgSrc}
      alt="This is a picture of a movie"
    />
  );
}

export default MovieCard;
