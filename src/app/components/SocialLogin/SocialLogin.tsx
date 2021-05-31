import React from 'react';
import styles from './SocialLogin.module.css';

type SocialLoginProps = {
  icon: JSX.Element;
  link: string;
};

export default function SocialLogin({
  icon,
  link,
}: SocialLoginProps): JSX.Element {
  return (
    <a className={styles.link} href={link}>
      {icon}
    </a>
  );
}
