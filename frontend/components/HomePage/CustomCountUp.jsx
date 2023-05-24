import React from 'react';
import dynamic from 'next/dynamic';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

export default function CustomCountUp({start, end, duration, style}) {

  return (
    <>
      <CountUp
        start={start}
        end={end}
        duration={duration}
        style={style}
      />
    </>
  );
}