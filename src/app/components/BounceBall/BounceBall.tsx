import React, { useEffect, useRef } from 'react';

const GRAVITY = 9.8;

let isGrabbed = false;
let clickedXPosition = 0;
let clickedYPosition = 0;
let xDiff = 0;
let yDiff = 0;

const ballProperties: Record<string, any> = {
  x: 250,
  y: 250,
  velocityX: 0,
  velocityY: 0,
};

function BounceBall() {
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
    const containerDiv = containerRef.current;

    const mouseDownListener = (e: MouseEvent) => {
      isGrabbed = true;
      clickedXPosition = e.offsetX;
      clickedYPosition = e.offsetY;
    };
    containerDiv?.addEventListener('mousedown', mouseDownListener);

    const mouseupListener = (e: MouseEvent) => {
      if (!isGrabbed) {
        return;
      }
      xDiff = e.offsetX - clickedXPosition;
      yDiff = e.offsetY - clickedYPosition;
      ballProperties.velocityX -= xDiff / 3;
      ballProperties.velocityY -= yDiff / 3;
      isGrabbed = false;
    };

    containerDiv?.addEventListener('mouseup', mouseupListener);
    const interval = setInterval(() => {
      ballProperties.velocityY += GRAVITY / 20;
      if (Math.abs(ballProperties.velocityY) < 1 && ballProperties.y > 468) {
        ballProperties.velocityY = 0;
      }
      ballProperties.velocityX *= 0.99;
      if (
        (ballProperties.y < 0 && ballProperties.velocityY < 0)
        || (ballProperties.y > 470 && ballProperties.velocityY > 0)
      ) {
        ballProperties.velocityY = -ballProperties.velocityY * 0.7;
      }
      if (
        (ballProperties.x < 0 && ballProperties.velocityX < 0)
        || (ballProperties.x > 470 && ballProperties.velocityX > 0)
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
      containerDiv?.removeEventListener('mousedown', mouseDownListener);
      containerDiv?.removeEventListener('mouseup', mouseupListener);
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
