import React from 'react';
import Profile from './Profile';

export default {
  title: 'Page/Profile',
  component: Profile,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <Profile />;
