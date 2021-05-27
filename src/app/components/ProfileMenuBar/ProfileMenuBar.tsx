import React from 'react';
import styles from './ProfileMenuBar.module.css';

type LinkProps = {
  link: string;
  icon: React.SVGProps<SVGSVGElement>;
  text: string;
};

function ProfileMenuBar({ link, icon, text }: LinkProps): JSX.Element {
  return (
    <a className={styles.link} href={link}>
      {icon}
      <span>{text}</span>
    </a>
  );
}

export default ProfileMenuBar;
