import React from 'react';
import FacebookIcon from '../Icons/FacebookIcon';
import GoogleIcon from '../Icons/GoogleIcon';
import SocialLogin from './SocialLogin';

export default {
  title: 'Component/SocialLogin',
  component: SocialLogin,
};

export const Facebook = (): JSX.Element => (
  <SocialLogin icon={<FacebookIcon />} link={'URL'} />
);

export const Google = (): JSX.Element => (
  <SocialLogin icon={<GoogleIcon />} link={'URL'} />
);
