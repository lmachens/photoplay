import React from 'react';

export default function FavoriteIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <polygon
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        points="15 5 18 13 26 13 19 18 22 26 15 21 8 26 11 18 4 13 12 13 15 5"
      />
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color={'var(--primary-gradient-from)'} />
          <stop offset="1" stop-color={'var(--primary-gradient-to)'} />
        </linearGradient>
      </defs>
    </svg>
  );
}
