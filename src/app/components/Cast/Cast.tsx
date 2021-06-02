import React from 'react';
import ArtistCard from '../ArtistCard/ArtistCard';
import styles from './MovieDetails.module.css';

export type CastProps = {
  actors: Array<{
    profilePath: string;
    name: string;
  }>;
};

function Cast({ actors }: CastProps): JSX.Element {
  return (
    <div className={styles.artistCards}>
      {actors.map((actor) => (
        <ArtistCard imgSrc={actor.profilePath} artistName={actor.name} />
      ))}
    </div>
  );
}

export default Cast;
