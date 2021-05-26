import React from 'react';
import classes from './Card.module.css';

type CardProps = {
  img: string;
  artist: string;
};

function Card({ img, artist }: CardProps): JSX.Element {
  return (
    <div className={classes.card__container}>
      <img className={classes.card__image} src={img} alt="" />
      <h3 className={classes.card__name}>{artist}</h3>
    </div>
  );
}

export default Card;
