import classes from '*.module.css';
import React from 'react';
import BackButton from './BackButton';

export default {
  title: 'Component/BackButton',
  component: BackButton,
};

export const Back = (): JSX.Element => (
  <BackButton>
    <span>&lt; </span>Back
  </BackButton>
);
