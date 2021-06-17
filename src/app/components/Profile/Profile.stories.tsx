import React from 'react';
import { Story } from '@storybook/react';
import Profile, { ProfileProps } from './Profile';

export default {
  title: 'Component/Profile',
  component: Profile,
};

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Leon = Template.bind({});
Leon.args = {
  firstName: 'Leon',
  lastName: 'Machens',
  yearOfBirth: 2000,
};

export const Philipp = Template.bind({});
Philipp.args = {
  firstName: 'Philipp',
  lastName: 'Gartz',
  yearOfBirth: 2005,
};
