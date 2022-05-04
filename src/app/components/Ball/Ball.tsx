import React from 'react';
import { keyframes } from '@emotion/react';

const layers = Array(50).fill(0);

const 빙글빙글 = keyframes({
  from: { transform: 'rotateY(0deg)' },
  to: { transform: 'rotateY(360deg)' },
});

function Ball() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div
      css={{
        width: 500,
        height: 500,
        position: 'relative',
        transformStyle: 'preserve-3d',
        animationName: 빙글빙글,
        animationDuration: '3000ms',
        animationIterationCount: 'infinite',
      }}
    >
      {layers.map((_, index) => {
        const tick = Math.floor(layers.length / 2);
        const z = ((index - tick) / tick) * 250;
        const radius = Math.sqrt(250 ** 2 - z ** 2);
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const rotateX = 360 - Math.floor(Math.random() * 360);
        const rotateY = 360 - Math.floor(Math.random() * 360);
        return (
          <div
            key={index.toString()}
            css={{
              width: radius * 2,
              height: radius * 2,
              border: `2px solid rgba(${red}, ${green}, ${blue}, 0.8)`,
              //   backgroundColor: `rgba(${red}, ${green}, ${blue}, 0.1)`,
              borderRadius: '50%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${z}px)`,
            }}
          />
        );
      })}
    </div>
  );
}

export { Ball };
