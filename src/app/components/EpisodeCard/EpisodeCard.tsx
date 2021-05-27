import React from 'react';
import styles from './EpisodeCard.module.css';
import DownloadIcon from '../Icons/DownloadIcon';

type InputProps = {
  headline: string;
  runtime: number;
  imgSrc: string;
};

function EpisodeCard({
  headline,
  runtime: length,
  imgSrc,
}: InputProps): JSX.Element {
  return (
    <div className={styles.episodeCard}>
      <img className={styles.episodeCard__img} src={imgSrc} />
      <h3 className={styles.episodeCard__headline}>{headline}</h3>
      <span className={styles.episodeCard__length}>{length} min</span>
      <button className={styles.episodeCard__button}>
        <DownloadIcon className={styles.episodeCard__button_download} />
        <div className={styles.episodeCard__button_text}>Download</div>
      </button>
    </div>
  );
}
export default EpisodeCard;
