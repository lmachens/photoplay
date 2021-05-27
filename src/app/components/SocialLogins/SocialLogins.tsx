import React from 'react';
import styles from './SocialLogins.module.css';

type SocialProps = {
  title: string;
};

export default function SocialLogins({ title }: SocialProps): JSX.Element {
  return (
    <div className={styles.SocialLogin}>
      <span className={styles.SocialLogin__title}>{title}</span>
    </div>
  );
}
