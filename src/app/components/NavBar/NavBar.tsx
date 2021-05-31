import React from 'react';
import DownloadIcon from '../Icons/DownloadIcon';
import HomeIcon from '../Icons/HomeIcon';
import ProfileIcon from '../Icons/ProfileIcon';
import SearchIcon from '../Icons/SearchIcon';
import NavBarLink from '../NavBarLink/NavBarLink';
import styles from './NavBar.module.css';

function NavBar(): JSX.Element {
  return (
    <div className={styles.navBar}>
      <NavBarLink icon={<HomeIcon />} text="Home" />
      <NavBarLink icon={<SearchIcon />} text="Search" />
      <NavBarLink icon={<DownloadIcon />} text="Download" />
      <NavBarLink icon={<ProfileIcon />} text="Profile" />
    </div>
  );
}

export default NavBar;
