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
    link: 'https://de-de.facebook.com/',
  },
  {
    icon: <GoogleIcon />,
    link: 'https://www.google.de/',
  },
];

export const Logins = (): JSX.Element => <SocialLogins socials={socials} />;
