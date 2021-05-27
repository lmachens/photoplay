import React from 'react';
import FacebookIcon from '../Icons/FacebookIcon';
import GoogleIcon from '../Icons/GoogleIcon';
import SocialLogin from './SocialLogin';

export default {
  title: 'Component/SocialLogin',
  component: SocialLogin,
};

export const SocialLogins = (): JSX.Element => (
  <SocialLogin
    title="Social Logins"
    icon1={<FacebookIcon />}
    icon2={<GoogleIcon />}
  />
);
