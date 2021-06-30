import React from 'react';

export default function FacebookIcon(): JSX.Element {
  return (
    <svg width="43.812" height="43.812" viewBox="0 0 43.812 43.812">
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="var(--gradient-primary-from)" />
          <stop offset="1" stop-color="var(--gradient-primary-to)" />
        </linearGradient>
      </defs>

      <path
        d="M21.906,0A21.906,21.906,0,1,0,43.812,21.906,21.931,21.931,0,0,0,21.906,0Zm5.448,22.677H23.79v12.7H18.509v-12.7H16v-4.49h2.51v-2.9c0-2.08.988-5.33,5.33-5.33l3.913.015v4.358h-2.84a1.075,1.075,0,0,0-1.12,1.223v2.638h4.024Z"
        fill="url(#linear-gradient)"
      />
    </svg>
  );
}
