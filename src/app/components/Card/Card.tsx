import React from 'react';
import classes from './Card.module.css';

type CardProps = {
  img: string;
  artist: string;
};

function Card({ img, artist }: CardProps): JSX.Element {
  return (
    <div className={classes.artistCard}>
      <img className={classes.artistImage} src={img} alt="" />
      <h3 className={classes.artistName}>{artist}</h3>
    </div>
  );
}

export default Card;
