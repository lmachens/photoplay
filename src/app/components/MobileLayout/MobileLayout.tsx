import React from 'react';
import styles from './MobileLayout.module.css';

type MobileLayoutProps = {
  children: React.ReactNode;
};
function MobileLayout({ children }: MobileLayoutProps): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}

export default MobileLayout;
