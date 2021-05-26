import React from 'react';
import Searchfield from './Searchfield';

export default {
  title: 'Component/Searchfield',
  component: Searchfield,
};

export const Input = (): JSX.Element => <Searchfield placeholder="Search" />;
