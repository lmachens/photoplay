import React from 'react';
import LabeledInput from './LabeledInput';

export default {
  title: 'Component/LabeledInput',
  component: LabeledInput,
};

export const email = (): JSX.Element => <LabeledInput>email</LabeledInput>;
export const password = (): JSX.Element => (
  <LabeledInput>password</LabeledInput>
);
