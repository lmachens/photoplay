import React from 'react';
import NavigationGenre from './NavigationGenre';

export default {
  title: 'Component/NavigationGenre',
  component: NavigationGenre,
};

const categoriesArray = ['Movie', 'Adventure', 'Comedy', 'Family'];

export const showGenre = (): JSX.Element => (
  <NavigationGenre categories={categoriesArray} />
);

const categoriesArray2 = ['Trailer', 'Series', 'Funny', 'Families'];

export const showGenre2 = (): JSX.Element => (
  <NavigationGenre categories={categoriesArray2} />
);

const categoriesArray3 = ['Hallo', 'Series', 'Movies', 'Array'];

export const showGenre3 = (): JSX.Element => (
  <NavigationGenre categories={categoriesArray3} />
);
