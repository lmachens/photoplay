import React from 'react';
import Card from './Card';
import michaelPenaImage from '../../michaelPena.png';

export default {
  title: 'Component/Card',
  component: Card,
};

export const michaelPena = (): JSX.Element => (
  <Card img={michaelPenaImage} artist="Michael Pena" />
);

export const angelinaJolie = (): JSX.Element => (
  <Card
    img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KbGDYXEKNtd43xjvDr0MVQHaKT%26pid%3DApi&f=1"
    artist="Angelina Jolie"
  />
);
