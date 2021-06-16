import React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Login = Template.bind({});
Login.args = {
  children: 'Login',
};

export const Register = Template.bind({});
Register.args = {
  children: 'Register',
};
