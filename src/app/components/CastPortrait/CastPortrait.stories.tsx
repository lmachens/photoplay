import React from 'react';
import CastPortrait from './CastPortrait';
import michaelPenaImage from '../../assets/michaelPena.png';

export default {
  title: 'Component/CastPortrait',
  component: CastPortrait,
  parameters: {
    layout: 'centered',
  },
};

export const michaelPena = (): JSX.Element => (
  <CastPortrait imgSrc={michaelPenaImage} firstName="Michael" lastName="Peña" />
);

export const philippGartz = (): JSX.Element => (
  <CastPortrait
    imgSrc="https://ca.slack-edge.com/TTHG21AH3-UTRGVUVQX-504c15efb0fd-512"
    firstName="Philipp"
    lastName="Gartz"
  />
);

export const leonMachens = (): JSX.Element => (
  <CastPortrait
    imgSrc="https://ca.slack-edge.com/TTHG21AH3-UT7ATH2V7-f325b47d14d2-512"
    firstName="Leon"
    lastName="Machens"
  />
);
