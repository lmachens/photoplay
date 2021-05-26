import React from 'react';
import classes from './Avatar.module.css';

type AvatarProps = {
  imageSrc: string;
};

function Avatar({ imageSrc }: AvatarProps): JSX.Element {
  return <img src={imageSrc} className={classes.avatar__img} />;
}

export default Avatar;
