import React, { ReactNode } from 'react';
import classes from './Card.module.css';

type CardProps = {
  img: string;
  artist: string;
};

function Card({ img, artist }: CardProps): JSX.Element {
  return (
    <div className={classes.artistCard}>
      <img src={img} alt="" />
      <h3>{artist}</h3>
    </div>
  );
}

export default Card;
