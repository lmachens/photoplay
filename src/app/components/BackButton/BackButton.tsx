import React, { ReactNode } from 'react';
import classes from './BackButton.module.css';

type BackButtonProps = {
  children: ReactNode;
};

function BackButton({ children }: BackButtonProps): JSX.Element {
  return <button className={classes.backButton}>{children}</button>;
}

export default BackButton;
