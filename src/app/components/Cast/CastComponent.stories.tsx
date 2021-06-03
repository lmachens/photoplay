import React from 'react';
import Cast from './Cast';

export default {
  title: 'Component/Cast',
  component: Cast,
};

const actors = [
  {
    profilePath:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a7n0d9C3E2oiIsPICo_TggAAAA%26pid%3DApi&f=1',
    name: 'Eva Longoria',
  },
  {
    profilePath:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a7n0d9C3E2oiIsPICo_TggAAAA%26pid%3DApi&f=1',
    name: 'Eva Longoria',
  },
];

export const Castlist = (): JSX.Element => <Cast actors={actors} />;
