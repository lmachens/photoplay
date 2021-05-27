import React from 'react';
import classes from './SocialLogin.module.css';

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
    <div className={classes.SocialLogin}>
      <span className={classes.SocialLogin__title}>{title}</span>
      <a className={classes.SocialLogin__link1} href="#">
        {icon1}
      </a>
      <a className={classes.SocialLogin__link2} href="#">
        {icon2}
      </a>
    </div>
  );
}
