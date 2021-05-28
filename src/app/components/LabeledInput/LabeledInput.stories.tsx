import React from 'react';
import LabeledInput from './LabeledInput';

export default {
  title: 'Component/LabeledInput',
  component: LabeledInput,
};

export const email = (): JSX.Element => (
  <LabeledInput
    value=""
    onChange={(event) => {
      return event;
    }}
    label="Email"
    placeholder="Email"
  />
);
export const password = (): JSX.Element => (
  <LabeledInput
    value=""
    onChange={(event) => {
      return event;
    }}
    label="Password"
    placeholder="Password"
  />
);
