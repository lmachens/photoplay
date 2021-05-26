import React from 'react';
import LabeledInput from './LabeledInput';

export default {
  title: 'Component/LabeledInput',
  component: LabeledInput,
};

export const email = (): JSX.Element => (
  <LabeledInput label="Email" placeholder="Email" />
);
export const password = (): JSX.Element => (
  <LabeledInput label="Password" placeholder="Password" />
);
