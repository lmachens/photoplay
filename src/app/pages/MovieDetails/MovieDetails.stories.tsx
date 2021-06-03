import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import MovieDetails from './MovieDetails';

export default {
  title: 'Page/MovieDetails',
  component: MovieDetails,
  parameters: {
    layout: 'fullscreen',
  },
};

export const ArmyOfTheDead = (): JSX.Element => (
  <MemoryRouter initialEntries={['/movie/503736']}>
    <Route path="/movie/:id">
      <MovieDetails />
    </Route>
  </MemoryRouter>
);

export const JudgmentNight = (): JSX.Element => (
  <MemoryRouter initialEntries={['/movie/6']}>
    <Route path="/movie/:id">
      <MovieDetails />
    </Route>
  </MemoryRouter>
);
