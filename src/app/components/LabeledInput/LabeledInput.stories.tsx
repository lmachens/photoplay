import React from 'react';
import LabeledInput from './LabeledInput';

export default {
  title: 'Component/LabeledInput',
  component: LabeledInput,
};

export const email = (): JSX.Element => (
  <LabeledInput
    label="Email"
    placeholder="Email"
    value=""
    onChange={console.log}
  />
);
export const password = (): JSX.Element => (
  <LabeledInput
    label="Password"
    placeholder="Password"
    value=""
    onChange={console.log}
  />
);
