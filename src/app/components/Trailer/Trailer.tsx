import React from 'react';
import styles from './Trailer.module.css';

type TrailerProps = {
  headline: string;
  videoSrc: string;
  imageSrc: string;
};

function Trailer({ headline, videoSrc, imageSrc }: TrailerProps): JSX.Element {
  return (
    <>
      <video className={styles.video} controls poster={imageSrc}>
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc} type="video/webm" />
      </video>
      <h3 className={styles.video__headline}>{headline}</h3>
    </>
  );
}

export default Trailer;
