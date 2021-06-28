import React from 'react';
import FavoriteIcon from '../Icons/FavoriteIcon';
import HomeIcon from '../Icons/HomeIcon';
import ProfileIcon from '../Icons/ProfileIcon';
import SearchIcon from '../Icons/SearchIcon';
import NavBarLink from '../NavBarLink/NavBarLink';
import styles from './NavBar.module.css';

function NavBar(): JSX.Element {
  return (
    <div className={styles.navBar}>
      <NavBarLink icon={<HomeIcon />} text="Home" link="/" />
      <NavBarLink icon={<SearchIcon />} text="Search" link="#" />
      <NavBarLink icon={<FavoriteIcon />} text="Favorites" link="/favorites" />
      <NavBarLink icon={<ProfileIcon />} text="Profile" link="/profile" />
    </div>
  );
}

export default NavBar;
