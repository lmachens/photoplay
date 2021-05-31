import React from 'react';
import TVShowDetails from './TVShowDetails';

export default {
  title: 'Page/TVShowDetails',
  component: TVShowDetails,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <TVShowDetails />;
