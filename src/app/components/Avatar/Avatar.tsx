import React from 'react';
import styles from './Avatar.module.css';

type AvatarProps = {
  imageSrc: string;
};

function Avatar({ imageSrc }: AvatarProps): JSX.Element {
  return <img src={imageSrc} className={styles.img} />;
}

export default Avatar;
