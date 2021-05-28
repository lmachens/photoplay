import React from 'react';

type WatchlistProps = {
  imgSrc: string;
};

function Watchlist({ imgSrc }: WatchlistProps): JSX.Element {
  return (
    <div>
      <img src={imgSrc} alt="" />
    </div>
  );
}

export default Watchlist;
