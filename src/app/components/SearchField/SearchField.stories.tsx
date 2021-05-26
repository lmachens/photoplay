import React from 'react';
import SearchField from './SearchField';

export default {
  title: 'Component/SearchField',
  component: SearchField,
};

export const search = (): JSX.Element => (
  <SearchField placeholder="Search..." />
);
export const find = (): JSX.Element => <SearchField placeholder="Find..." />;
export const explore = (): JSX.Element => (
  <SearchField placeholder="Explore..." />
);
