import React from 'react';
import Cast from './Cast';

export default {
  title: 'Page/Cast',
  component: Cast,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <Cast />;
