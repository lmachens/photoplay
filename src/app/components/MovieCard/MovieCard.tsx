import React from 'react';

type WatchlistProps = {
  imgSrc: string;
};

function Watchlist({ imgSrc }: WatchlistProps): JSX.Element {
  return <img src={imgSrc} alt="" />;
}

export default Watchlist;
