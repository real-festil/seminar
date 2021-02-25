import React from 'react';

const crossIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.45312"
        y="0.832031"
        width="30"
        height="3"
        transform="rotate(45 2.45312 0.832031)"
        fill="#EB5757"
      />
      <rect
        width="30"
        height="3"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 21.5449 0.832031)"
        fill="#EB5757"
      />
    </svg>
  );
};

export default crossIcon;
