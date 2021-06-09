import React from 'react';
import FavouritePage from './FavouritePage';

export default {
  title: 'Page/FavouritePage',
  component: FavouritePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <FavouritePage />;
