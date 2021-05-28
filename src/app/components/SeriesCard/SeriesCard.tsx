import React from 'react';
import styles from './SeriesCard.module.css';

type InputProps = {
  headline: string;
  seriesInfo: string;
  imgSrc: string;
};

function EpisodeCard({
  headline,
  seriesInfo,
  imgSrc,
}: InputProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imgSrc} />
      <div className={styles.seriesInfo}>
        <h3 className={styles.headline}>{headline}</h3>
        <span className={styles.seriesEpisode}>{seriesInfo}</span>
      </div>
    </div>
  );
}
export default EpisodeCard;
