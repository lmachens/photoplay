import React from 'react';
import styles from './Profile.module.css';
import Avatar from '../../components/Avatar/Avatar';
import AccountIcon from '../../components/Icons/AccountIcon';
import ProfileMenuBar from '../../components/ProfileMenuBar/ProfileMenuBar';
import NotificationsIcon from '../../components/Icons/Notifications';
import SettingsIcon from '../../components/Icons/SettingsIcon';
import HelpIcon from '../../components/Icons/HelpIcon';
import LogoutIcon from '../../components/Icons/LogoutIcon';
import NavBarLink from '../../components/NavBarLink/NavBarLink';
import HomeIcon from '../../components/Icons/HomeIcon';
import SearchIcon from '../../components/Icons/SearchIcon';
import DownloadIcon from '../../components/Icons/DownloadIcon';
import ProfileIcon from '../../components/Icons/ProfileIcon';

function Profile(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Avatar imageSrc="/dieter.jpeg" />
        <h1 className={styles.profileName}>Dieter Bohlen</h1>
        <span className={styles.profileStatus}>Premium</span>
      </header>
      <main className={styles.profileMenu}>
        <ProfileMenuBar link="#" icon={<AccountIcon />} text="Account" />
        <ProfileMenuBar
          link="#"
          icon={<NotificationsIcon />}
          text="Notifications"
        />
        <ProfileMenuBar link="#" icon={<SettingsIcon />} text="Settings" />
        <ProfileMenuBar link="#" icon={<HelpIcon />} text="Help" />
        <ProfileMenuBar link="#" icon={<LogoutIcon />} text="Logout" />
      </main>
      <footer className={styles.footer}>
        <NavBarLink icon={<HomeIcon />} text="Home" />
        <NavBarLink icon={<SearchIcon />} text="Search" />
        <NavBarLink icon={<DownloadIcon />} text="Download" />
        <NavBarLink icon={<ProfileIcon />} text="Profile" />
      </footer>
    </div>
  );
}

export default Profile;
