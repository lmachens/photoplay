import React from 'react';

type StarProps = {
  checked: boolean;
};

const CHECKED_PATH =
  'M7.594,1.463,9.157,4.628a.746.746,0,0,0,.562.408l3.493.508a.746.746,0,0,1,.413,1.272L11.1,9.279a.746.746,0,0,0-.214.66l.6,3.479A.746.746,0,0,1,10.4,14.2L7.273,12.562a.747.747,0,0,0-.694,0L3.454,14.2a.746.746,0,0,1-1.082-.786l.6-3.479a.746.746,0,0,0-.214-.66L.227,6.815A.746.746,0,0,1,.64,5.543l3.493-.508a.746.746,0,0,0,.562-.408L6.257,1.463A.746.746,0,0,1,7.594,1.463Z';
const UNCHECKED_PATH =
  'M13.55,7.061A.993.993,0,0,0,13,5.366L9.645,4.879a.438.438,0,0,1-.33-.24L7.816,1.6a.993.993,0,0,0-1.781,0l-1.5,3.039a.438.438,0,0,1-.33.24L.851,5.367A.993.993,0,0,0,.3,7.061L2.727,9.426a.439.439,0,0,1,.126.388l-.573,3.34A.993.993,0,0,0,3.722,14.2l3-1.577a.439.439,0,0,1,.408,0l3,1.577a.993.993,0,0,0,1.441-1.047L11,9.814a.439.439,0,0,1,.126-.388Zm-3.1,2.847.573,3.34a.439.439,0,0,1-.636.463l-3-1.577a.993.993,0,0,0-.925,0l-3,1.577a.439.439,0,0,1-.636-.463L3.4,9.908a.993.993,0,0,0-.286-.879L.688,6.664a.439.439,0,0,1,.243-.748l3.353-.487a.992.992,0,0,0,.748-.543l1.5-3.039a.439.439,0,0,1,.787,0l1.5,3.039a.991.991,0,0,0,.748.543l3.354.487a.439.439,0,0,1,.243.748L10.736,9.029A.993.993,0,0,0,10.45,9.908Z';

function Star({ checked }: StarProps): JSX.Element {
  return (
    <svg width="13.85" height="13.246" viewBox="0 0 13.85 13.246">
      <defs>
        <linearGradient
          id="star-linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color={'var(--gradient-primary-from)'} />
          <stop offset="1" stop-color={'var(--gradient-primary-to)'} />
        </linearGradient>
      </defs>
      <path
        d={checked ? CHECKED_PATH : UNCHECKED_PATH}
        transform="translate(-0.001 -1.047)"
        fill="url(#star-linear-gradient)"
      />
    </svg>
  );
}
export default Star;
