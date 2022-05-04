import React, { useState } from 'react';

function RippleButton() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [isClicked, setIsClicked] = useState(false);

  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      css={[
        {
          width: '100px',
          height: '100px',
          backgroundColor: 'rgba(64, 64, 240, 0.5)',
          outline: 'none',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          transitionProperty: 'transform, opacity',
          transitionDuration: '500ms',
          transitionTimingFunction: 'ease',
          '&:hover': {
            backgroundColor: 'rgba(64, 64, 240, 0.7)',
          },
          '&:active': {
            transform: 'scale(0.8)',
          },
        },
        isClicked && {
          transform: 'scale(2)',
          opacity: 0,
        },
      ]}
    >
      Click Me!
    </button>
  );
}

export { RippleButton };
