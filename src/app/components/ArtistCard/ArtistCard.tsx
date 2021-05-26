import React from 'react';
import classes from './ArtistCard.module.css';

type CardProps = {
  imgSrc: string;
  artistName: string;
};

function ArtistCard({ imgSrc, artistName }: CardProps): JSX.Element {
  return (
    <div className={classes.card__container}>
      <img className={classes.card__image} src={imgSrc} alt="" />
      <h3 className={classes.card__name}>{artistName}</h3>
    </div>
  );
}

export default ArtistCard;
