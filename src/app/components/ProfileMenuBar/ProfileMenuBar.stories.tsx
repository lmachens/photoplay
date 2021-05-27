import React from 'react';
import ProfileMenuBar from './ProfileMenuBar';
import AccountIcon from '../Icons/AccountIcon';
import NotificationsIcon from '../Icons/Notifications';
import SettingsIcon from '../Icons/SettingsIcon';
import HelpIcon from '../Icons/HelpIcon';
import LogoutIcon from '../Icons/LogoutIcon';

export default {
  title: 'Component/ProfileMenuBar ',
  component: ProfileMenuBar,
};

export const Account = (): JSX.Element => (
  <ProfileMenuBar link="#" icon={<AccountIcon />} text="Account" />
);
export const Notifications = (): JSX.Element => (
  <ProfileMenuBar link="#" icon={<NotificationsIcon />} text="Notifications" />
);
export const Settings = (): JSX.Element => (
  <ProfileMenuBar link="#" icon={<SettingsIcon />} text="Settings" />
);
export const Help = (): JSX.Element => (
  <ProfileMenuBar link="#" icon={<HelpIcon />} text="Help" />
);
export const Logout = (): JSX.Element => (
  <ProfileMenuBar link="#" icon={<LogoutIcon />} text="Logout" />
);
