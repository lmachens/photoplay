import React from 'react';
import Homescreen from './Homescreen';

export default {
  title: 'Page/Homescreen',
  component: Homescreen,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <Homescreen />;
