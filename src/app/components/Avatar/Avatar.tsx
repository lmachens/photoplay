import React from 'react';
import classes from './Avatar.module.css';

type AvatarProps = {
  imageSrc: string;
};

function Avatar({ imageSrc }: AvatarProps): JSX.Element {
  return (
    <div>
      <img src={imageSrc} className={classes.avatar} />
    </div>
  );
}

export default Avatar;
