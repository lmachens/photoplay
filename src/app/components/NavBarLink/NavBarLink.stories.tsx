import React from 'react';
import NavBarLink from './NavBarLink';
import HomeIcon from '../Icons/HomeIcon';

export default {
  title: 'Component/NavBarLink',
  component: NavBarLink,
};

export const Home = (): JSX.Element => (
  <NavBarLink icon={<HomeIcon />} text="Home" />
);
