import React from 'react';

function AppIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="112"
      height="123.372"
      viewBox="0 0 112 123.372"
    >
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
      <g transform="translate(-131 -180.628)">
        <text
          transform="translate(131 300)"
          fill="var(--primary-color)"
          font-size="16"
          font-family="var(--font-family)"
          font-weight="bold"
          letter-spacing="0.076em"
        >
          <tspan x="0" y="0">
            PHOTOPLAY
          </tspan>
        </text>
        <g transform="translate(0 59)">
          <path
            d="M23.789,36.569H0V0H66.254a27.138,27.138,0,0,1-4.208,4.2A33.515,33.515,0,0,1,50.4,10.085a52.771,52.771,0,0,1-14.715,1.961H23.789V36.569Z"
            transform="translate(155.495 177.51)"
            fill="url(#linear-gradient)"
          />
          <path
            d="M5533.787-150.922h-16.326a75.05,75.05,0,0,1,23.875-36.568h34.918a27.278,27.278,0,0,1-4.208,4.2,33.53,33.53,0,0,1-11.65,5.884,52.725,52.725,0,0,1-14.714,1.962h-11.895v24.521h0Z"
            transform="translate(-5354.505 365)"
            fill="rgba(0,0,0,0.24)"
          />
          <path
            d="M13.148,0A13.148,13.148,0,1,0,26.3,13.148,13.147,13.147,0,0,0,13.148,0Zm6.291,14.2L11.6,19.6a1.281,1.281,0,0,1-2.008-1.055V7.752A1.281,1.281,0,0,1,11.6,6.7l7.842,5.4a1.281,1.281,0,0,1,0,2.111Z"
            transform="translate(173.2 139.816)"
            fill="var(--primary-color)"
          />
          <path
            d="M-4965.466,28.96h39.124s18.65-.451,22.474,7.911"
            transform="translate(5120.964 94.68)"
            fill="none"
            stroke="var(--primary-color)"
            stroke-linecap="square"
            stroke-width="4"
          />
          <path
            d="M-4888.493-54.685s-7.046.1-7.336,5.582c.336-.163,59.478,0,59.478,0v-1.361a26.518,26.518,0,0,0-3.322-1.664c-1.013-.322-7.522-1.029-7.522-1.029l-13.3-.683Z"
            transform="translate(5049 177)"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
}

export default AppIcon;
