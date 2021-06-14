import React from 'react';
import SearchField from './SearchField';

export default {
  title: 'Component/SearchField',
  component: SearchField,
};

export const search = (): JSX.Element => (
  <SearchField placeholder="Search..." value="" onChange={console.log} />
);
export const find = (): JSX.Element => (
  <SearchField placeholder="Find..." value="" onChange={console.log} />
);
export const explore = (): JSX.Element => (
  <SearchField placeholder="Explore..." value="" onChange={console.log} />
);
