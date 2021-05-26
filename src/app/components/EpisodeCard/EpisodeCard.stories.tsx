import React from 'react';
import EpisodeCard from './EpisodeCard';
import DownloadIcon from '../Icons/DownloadIcon';

export default {
  title: 'Component/EpisodeCard',
  component: EpisodeCard,
};

export const episodeCard = (): JSX.Element => (
  <EpisodeCard
    headline="1. The Kingpin Strategy"
    length="58 min"
    imgSrc="./dieter.jpeg"
    downloadIcon={<DownloadIcon />}
    buttonText="Download"
  />
);
