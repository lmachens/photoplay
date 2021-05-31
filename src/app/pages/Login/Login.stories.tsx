import React from 'react';
import Login from './Login';

export default {
  title: 'Page/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <Login />;
