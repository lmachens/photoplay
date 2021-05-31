import React from 'react';
import NavBarLink from './NavBarLink';
import HomeIcon from '../Icons/HomeIcon';
import SearchIcon from '../Icons/SearchIcon';
import DownloadIcon from '../Icons/DownloadIcon';
import ProfileIcon from '../Icons/ProfileIcon';

export default {
  title: 'Component/NavBarLink',
  component: NavBarLink,
};

export const Home = (): JSX.Element => (
  <NavBarLink icon={<HomeIcon />} text="Home" link="#" />
);
export const Search = (): JSX.Element => (
  <NavBarLink icon={<SearchIcon />} text="Search" link="#" />
);
export const Download = (): JSX.Element => (
  <NavBarLink icon={<DownloadIcon />} text="Download" link="#" />
);
export const Profile = (): JSX.Element => (
  <NavBarLink icon={<ProfileIcon />} text="Profile" link="#" />
);
