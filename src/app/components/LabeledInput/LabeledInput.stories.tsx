import React from 'react';
import LabeledInput, { LabeledInputProps } from './LabeledInput';
import { Story } from '@storybook/react';

export default {
  title: 'Component/LabeledInput',
  component: LabeledInput,
};

const Template: Story<LabeledInputProps> = (args) => <LabeledInput {...args} />;

export const Email = Template.bind({});

Email.args = {
  label: 'Email',
  placeholder: 'Email',
  value: '',
};

export const Password = Template.bind({});

Password.args = {
  label: 'Password',
  placeholder: 'Password',
  value: '',
  type: 'password',
};
