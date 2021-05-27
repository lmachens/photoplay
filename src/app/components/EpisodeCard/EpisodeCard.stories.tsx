import React from 'react';
import EpisodeCard from './EpisodeCard';

export default {
  title: 'Component/EpisodeCard',
  component: EpisodeCard,
};

export const The_Kingpin_Strategy = (): JSX.Element => (
  <EpisodeCard
    headline="1. The Kingpin Strategy"
    runtime={58}
    imgSrc="./kingpinStrategy.jpg"
  />
);

export const Matrix = (): JSX.Element => (
  <EpisodeCard headline="2. Martix" runtime={210} imgSrc="./matrix.jpg" />
);
