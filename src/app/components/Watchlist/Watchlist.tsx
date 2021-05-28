import React from 'react';

type WatchlistProps = {
  imgSrc: string;
};

function Watchlist({ imgSrc }: WatchlistProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.container__image} src={imgSrc} alt="" />
    </div>
  );
}

export default Watchlist;
