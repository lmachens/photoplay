import React from 'react';
import Trailer from './Trailer';

export default {
  title: 'Component/Trailer',
  component: Trailer,
};

export const TrailerView = (): JSX.Element => (
  <Trailer headline="Narcos" videoSrc="" />
);
