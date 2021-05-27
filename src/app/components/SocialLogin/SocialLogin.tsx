import React from 'react';
import styles from './SocialLogin.module.css';

type SocialProps = {
  title: string;
  icon1: React.SVGProps<SVGSVGElement>;
  icon2: React.SVGProps<SVGSVGElement>;
};

export default function SocialLogin({
  title,
  icon1,
  icon2,
}: SocialProps): JSX.Element {
  return (
    <div className={styles.SocialLogin}>
      <span className={styles.SocialLogin__title}>{title}</span>
      <a className={styles.SocialLogin__link1} href="#">
        {icon1}
      </a>
      <a className={styles.SocialLogin__link2} href="#">
        {icon2}
      </a>
    </div>
  );
}
