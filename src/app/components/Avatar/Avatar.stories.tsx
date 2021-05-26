import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Component/Avatar',
  component: Avatar,
};

export const Dieter = (): JSX.Element => <Avatar imageSrc="./dieter.jpeg" />;
export const Thomas = (): JSX.Element => <Avatar imageSrc="./thomas.jpeg" />;
