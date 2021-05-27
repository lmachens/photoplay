import React from 'react';
import classes from './EpisodeCard.module.css';

type InputProps = {
  headline: string;
  length: string;
  imgSrc: string;
  buttonText: string;
  downloadIcon: React.SVGProps<SVGSVGElement>;
};

function EpisodeCard(InputProps: InputProps): JSX.Element {
  return (
    <div className={classes.episodeCard}>
      <img className={classes.episodeCard__img} src={InputProps.imgSrc} />
      <h3 className={classes.episodeCard__headline}>{InputProps.headline}</h3>
      <span className={classes.episodeCard__length}>{InputProps.length}</span>
      <button className={classes.episodeCard__button}>
        {InputProps.downloadIcon}
        <div className={classes.episodeCard__button_text}>
          {InputProps.buttonText}
        </div>
      </button>
    </div>
  );
}
export default EpisodeCard;
