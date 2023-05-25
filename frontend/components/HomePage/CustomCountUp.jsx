import React from 'react';
import dynamic from 'next/dynamic';
import VisibilitySensor from 'react-visibility-sensor';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

export default function CustomCountUp({start, end, duration, style}) {

  return (
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 140 }}>
            {isVisible ? 
              <CountUp
              start={start}
              end={end}
              duration={duration}
              style={style}
              /> 
            : null}
          </div>
        )}
      </VisibilitySensor>
  );
}