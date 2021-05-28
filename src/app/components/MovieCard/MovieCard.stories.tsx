import React from 'react';
import MovieCard from './MovieCard';

export default {
  title: 'Component/MovieCard',
  component: MovieCard,
};

export const Antman = (): JSX.Element => <MovieCard imgSrc="./Antman.png" />;

export const EndOfWatch = (): JSX.Element => (
  <MovieCard imgSrc="./EndOfWatch.png" />
);

export const AmericanHustle = (): JSX.Element => (
  <MovieCard imgSrc="./AmericanHustle.png" />
);

export const Crash = (): JSX.Element => <MovieCard imgSrc="./Crash.png" />;
