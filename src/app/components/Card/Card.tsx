import React from 'react';
import classes from './Card.module.css';

type CardProps = {
  imgSrc: string;
  artistName: string;
};

function Card({ imgSrc, artistName }: CardProps): JSX.Element {
  return (
    <div className={classes.card__container}>
      <img className={classes.card__image} src={imgSrc} alt="" />
      <h3 className={classes.card__name}>{artistName}</h3>
    </div>
  );
}

export default Card;
