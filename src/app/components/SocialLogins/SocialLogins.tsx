import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import styles from './SocialLogins.module.css';

export type SocialLoginsProps = {
  socials: { icon: React.SVGProps<SVGSVGElement>; link: string }[];
};

export default function SocialLogins({
  socials,
}: SocialLoginsProps): JSX.Element {
  return (
    <div className={styles.SocialLogin}>
      <span className={styles.SocialLogin__title}>Social Logins</span>
      {socials.map((social) => (
        <SocialLogin icon={social.icon} link={social.link} />
      ))}
    </div>
  );
}
