import React from 'react';
import FacebookIcon from '../Icons/FacebookIcon';
import SocialLogin from './SocialLogin';

export default {
  title: 'Component/SocialLogin',
  component: SocialLogin,
};

export const SocialLogins = (): JSX.Element => (
  <SocialLogin icon={<FacebookIcon />} link={'URL'} />
);
