import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import styles from './SocialLogins.module.css';

export type SocialLoginsProps = {
  socials: { icon: JSX.Element; link: string }[];
};

export default function SocialLogins({
  socials,
}: SocialLoginsProps): JSX.Element {
  return (
    <div className={styles.SocialLogin}>
      <span className={styles.SocialLogin__title}>Social Logins</span>
      {socials.map((social) => (
        <SocialLogin key={social.link} icon={social.icon} link={social.link} />
      ))}
    </div>
  );
}
