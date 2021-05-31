import React from 'react';
import MovieCard from './MovieCard';

export default {
  title: 'Component/MovieCard',
  component: MovieCard,
};

export const Antman = (): JSX.Element => <MovieCard imgSrc="/antman.png" />;

export const EndOfWatch = (): JSX.Element => (
  <MovieCard imgSrc="/endOfWatch.png" />
);

export const AmericanHustle = (): JSX.Element => (
  <MovieCard imgSrc="/americanHustle.png" />
);

export const Crash = (): JSX.Element => <MovieCard imgSrc="/crash.png" />;

export const Narcos = (): JSX.Element => <MovieCard imgSrc="/narcos.png" />;

export const Deadpool = (): JSX.Element => <MovieCard imgSrc="/deadpool.png" />;

export const Annabelle = (): JSX.Element => (
  <MovieCard imgSrc="/annabelle.png" />
);

export const Toystory = (): JSX.Element => <MovieCard imgSrc="/toystory.png" />;
