import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarLink.module.css';

type LinkProps = {
  icon: React.SVGProps<SVGSVGElement>;
  text: string;
  link: string;
};

export default function NavBarLink({
  icon,
  text,
  link,
}: LinkProps): JSX.Element {
  return (
    <Link className={styles.link} to={link}>
      {icon}
      <span>{text}</span>
    </Link>
  );
}
