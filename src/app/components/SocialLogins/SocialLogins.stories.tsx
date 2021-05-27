import React from 'react';
import FacebookIcon from '../Icons/FacebookIcon';
import GoogleIcon from '../Icons/GoogleIcon';
import SocialLogins from './SocialLogins';

export default {
  title: 'Component/SocialLogins',
  component: SocialLogins,
};

const socials = [
  {
    icon: <FacebookIcon />,
    link: '#',
  },
  {
    icon: <GoogleIcon />,
    link: '#',
  },
];

export const Logins = (): JSX.Element => <SocialLogins socials={socials} />;
