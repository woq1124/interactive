import React, { useEffect, useRef } from 'react';

const GRAVITY = 9.8;

let isGrabbed = false;
let xDiff = 0;
let yDiff = 0;

const ballProperties: Record<string, any> = {
  x: 250,
  y: 250,
  velocityX: 0,
  velocityY: 0,
};

function BounceBall(props: {}) {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const ballRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // form hooks
  // query hooks
  // calculated values
  // effects
  useEffect(() => {
    const ballDiv = ballRef.current;
    const containerDiv = containerRef.current;

    const mouseDownListener = () => {
      isGrabbed = true;
    };
    ballDiv?.addEventListener('mousedown', mouseDownListener);

    const mousemoveListener = (e: any) => {
      if (!isGrabbed) {
        return;
      }
      xDiff = e.offsetX - (ballProperties.x + 15);
      yDiff = e.offsetY - (ballProperties.y + 15);
    };
    containerDiv?.addEventListener('mousemove', mousemoveListener);

    const mouseupListener = () => {
      if (!isGrabbed) {
        return;
      }
      ballProperties.velocityX -= xDiff;
      ballProperties.velocityY -= yDiff;
      isGrabbed = false;
    };
    document.addEventListener('mouseup', mouseupListener);
    const interval = setInterval(() => {
      ballProperties.velocityY += GRAVITY / 20;
      if (Math.abs(ballProperties.velocityY) < 1 && ballProperties.y > 468) {
        ballProperties.velocityY = 0;
      }
      ballProperties.velocityX *= 0.99;
      if (
        (ballProperties.y < 0 && ballProperties.velocityY < 0) ||
        (ballProperties.y > 470 && ballProperties.velocityY > 0)
      ) {
        ballProperties.velocityY = -ballProperties.velocityY * 0.7;
      }
      if (
        (ballProperties.x < 0 && ballProperties.velocityX < 0) ||
        (ballProperties.x > 470 && ballProperties.velocityX > 0)
      ) {
        ballProperties.velocityX = -ballProperties.velocityX * 0.7;
      }
      ballProperties.x += ballProperties.velocityX;
      ballProperties.y += ballProperties.velocityY;

      const x = Math.max(-10, Math.min(ballProperties.x, 480));
      const y = Math.max(-10, Math.min(ballProperties.y, 480));
      ballRef.current?.setAttribute('style', `top: ${y}px; left: ${x}px`);
    }, 20);
    return () => {
      clearInterval(interval);
      document.removeEventListener('mouseup', mouseupListener);
      ballDiv?.removeEventListener('mousedown', mouseDownListener);
      containerDiv?.removeEventListener('mousemove', mousemoveListener);
    };
  }, []);

  // handlers

  return (
    <div
      css={{
        width: 500,
        height: 500,
        border: '1px solid #AAA',
        position: 'relative',
        overflow: 'hidden',
      }}
      ref={containerRef}
    >
      <div
        id="ball"
        css={{
          width: 30,
          height: 30,
          backgroundColor: '#CCC',
          borderRadius: '50%',
          position: 'absolute',
          cursor: 'pointer',
        }}
        ref={ballRef}
      />
    </div>
  );
}

export { BounceBall };
