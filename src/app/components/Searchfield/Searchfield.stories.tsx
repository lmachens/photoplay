import React from 'react';
import SearchField from './SearchField';

export default {
  title: 'Component/SearchField',
  component: SearchField,
};

export const Input = (): JSX.Element => <SearchField placeholder="Search..." />;
export const Input2 = (): JSX.Element => <SearchField placeholder="Find..." />;
export const Input3 = (): JSX.Element => (
  <SearchField placeholder="Explore..." />
);
