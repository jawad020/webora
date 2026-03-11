import React from "react";

// Inline SVG Webora logo — transparent background, gradient W + WEBORA text
// Matches the purple→pink gradient of the original Webora brand logo
const WeborLogo = ({ height = 40 }) => (
  <svg
    height={height}
    viewBox="0 0 220 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "auto", display: "block" }}
  >
    <defs>
      <linearGradient id="wGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#5B3FD9" />
        <stop offset="100%" stopColor="#FF3EA5" />
      </linearGradient>
      <linearGradient id="textGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#CC3FDD" />
        <stop offset="100%" stopColor="#FF3EA5" />
      </linearGradient>
    </defs>

    {/* W shape — folded ribbon style */}
    <path
      d="M4 8 L13 42 L22 20 L31 42 L40 8"
      stroke="url(#wGrad)"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* EBORA text */}
    <text
      x="48"
      y="44"
      fontFamily="'Arial Black', 'Arial Bold', sans-serif"
      fontWeight="900"
      fontSize="36"
      fill="url(#textGrad)"
      letterSpacing="1"
    >
      EBORA
    </text>
  </svg>
);

export default WeborLogo;
