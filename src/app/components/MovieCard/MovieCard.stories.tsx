import React from 'react';
import MovieCard from './MovieCard';

export default {
  title: 'Component/MovieCard',
  component: MovieCard,
};

export const narcos = (): JSX.Element => <MovieCard imgSrc="/narcos.png" />;

export const deadpool = (): JSX.Element => <MovieCard imgSrc="/deadpool.png" />;

export const annabelle = (): JSX.Element => (
  <MovieCard imgSrc="/annabelle.png" />
);

export const toystory = (): JSX.Element => <MovieCard imgSrc="/toystory.png" />;
