import React from 'react';

type TrailerProps = {
  headline: string;
  videoSrc: string;
};

function Trailer({ headline, videoSrc }: TrailerProps): JSX.Element {
  return (
    <>
      <video controls poster="narcos.png">
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc} type="video/webm" />
      </video>
      <h1>{headline}</h1>
    </>
  );
}

export default Trailer;
