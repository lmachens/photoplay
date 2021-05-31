import React from 'react';
import styles from './NavBarLink.module.css';

type LinkProps = {
  icon: React.SVGProps<SVGSVGElement>;
  text: string;
};

export default function NavBarLink({ icon, text }: LinkProps): JSX.Element {
  return (
    <a className={styles.link} href="#">
      {icon}
      <span>{text}</span>
    </a>
  );
}
