import React from 'react';
import Card from './Card';
import michaelPenaImage from '../../michaelPena.png';

export default {
  title: 'Component/Card',
  component: Card,
};

export const michaelPena = (): JSX.Element => (
  <Card img={michaelPenaImage} artist="Michael Peña" />
);

export const evaLongoria = (): JSX.Element => (
  <Card
    img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a7n0d9C3E2oiIsPICo_TggAAAA%26pid%3DApi&f=1"
    artist="Eva Longoria"
  />
);

export const isabelaMoner = (): JSX.Element => (
  <Card
    img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oSnrwP8tDiRq7hU68Vq0JQHaLI%26pid%3DApi&f=1"
    artist="Isabela Moner"
  />
);

export const eugenioDerbez = (): JSX.Element => (
  <Card
    img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tfxVrfUnTRLm7QXjA3YXAgHaIc%26pid%3DApi&f=1"
    artist="Eugenio Derbez"
  />
);
