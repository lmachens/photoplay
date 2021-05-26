import React from 'react';
import classes from './SocialLogin.module.css';

type SocialProps = {
  title: string;
  icon: React.SVGProps<SVGSVGElement>;
};

export default function SocialLogin({ title, icon }: SocialProps): JSX.Element {
  return (
    <div className={classes.SocialLogin}>
      <span className={classes.SocialLogin__title}>{title}</span>
      <a className={classes.SocialLogin__link} href="#">
        {icon}
      </a>
      <a className={classes.SocialLogin__link} href="#">
        {icon}
      </a>
    </div>
  );
}
