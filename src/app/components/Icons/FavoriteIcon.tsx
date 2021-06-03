import React from 'react';

export default function FavoriteIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2 0 25 25"
      width="20"
      height="20"
      {...props}
    >
      <polygon
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        points="15 5 18 13 26 13 19 18 22 26 15 21 8 26 11 18 4 13 12 13 15 5"
      />
    </svg>
  );
}
