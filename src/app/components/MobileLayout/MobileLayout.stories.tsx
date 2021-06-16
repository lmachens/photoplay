import React from 'react';
import MobileLayout from './MobileLayout';

export default {
  title: 'Component/MobileLayout',
  component: MobileLayout,
};

export const Default = (): JSX.Element => (
  <MobileLayout>I have a max width</MobileLayout>
);
