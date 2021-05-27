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
