import React from 'react';
import styles from './SeriesCard.module.css';

type InputProps = {
  headline: string;
  seriesInfo: string;
  imgSrc: string;
  imgAlt: string;
};

function SeriesCard({
  headline,
  seriesInfo,
  imgSrc,
  imgAlt,
}: InputProps): JSX.Element {
  return (
    <article className={styles.container}>
      <img className={styles.img} src={imgSrc} alt={imgAlt} />
      <div className={styles.seriesInfo}>
        <h3 className={styles.seriesInfo__headline}>{headline}</h3>
        <span className={styles.seriesEpisode}>{seriesInfo}</span>
      </div>
    </article>
  );
}
export default SeriesCard;
