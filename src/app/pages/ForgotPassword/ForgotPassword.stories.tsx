import React from 'react';
import ForgotPassword from './ForgotPassword';

export default {
  title: 'Page/ForgotPassword',
  component: ForgotPassword,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <ForgotPassword />;
