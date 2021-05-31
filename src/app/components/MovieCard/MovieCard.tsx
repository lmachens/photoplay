import React from 'react';
import styles from './MovieCard.module.css';

type MovieCardProps = {
  imgSrc: string;
};

function MovieCard({ imgSrc }: MovieCardProps): JSX.Element {
  return <img className={styles.image} src={imgSrc} alt="Movie poster" />;
}

export default MovieCard;
