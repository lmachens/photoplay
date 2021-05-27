import React from 'react';
import Rating from './Rating';

export default {
  title: 'Component/Rating',
  component: Rating,
};

export const ZeroStars = (): JSX.Element => <Rating value={0} />;
export const OneStar = (): JSX.Element => <Rating value={2.5} />;
export const TwoStars = (): JSX.Element => <Rating value={4.7} />;
export const ThreeStars = (): JSX.Element => <Rating value={6.54} />;
export const FourStars = (): JSX.Element => <Rating value={8.7456} />;
export const FiveStars = (): JSX.Element => <Rating value={10} />;
