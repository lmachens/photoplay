import React from 'react';

type MovieCardProps = {
  imgSrc: string;
};

function MovieCard({ imgSrc }: MovieCardProps): JSX.Element {
  return <img src={imgSrc} alt="Movie poster" />;
}

export default MovieCard;
