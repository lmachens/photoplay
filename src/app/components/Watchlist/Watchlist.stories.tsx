import React from 'react';
import Watchlist from './Watchlist';

export default {
  title: 'Component/Watchlist',
  component: Watchlist,
};

export const narcos = (): JSX.Element => <Watchlist imgSrc="/narcos.png" />;

export const deadpool = (): JSX.Element => <Watchlist imgSrc="/deadpool.png" />;

export const annabelle = (): JSX.Element => (
  <Watchlist imgSrc="/annabelle.png" />
);

export const toystory = (): JSX.Element => <Watchlist imgSrc="/toystory.png" />;
