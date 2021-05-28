import React from 'react';
import SeriesCard from './SeriesCard';

export default {
  title: 'Component/SeriesCard',
  component: SeriesCard,
};

export const The_Kingpin_Strategy = (): JSX.Element => (
  <SeriesCard
    headline="Kingpin Strategy"
    seriesInfo="Test"
    imgSrc="./kingpinStrategy.jpg"
  />
);

export const Matrix = (): JSX.Element => (
  <SeriesCard headline="Matrix" seriesInfo="4 Episodes" imgSrc="./matrix.jpg" />
);
