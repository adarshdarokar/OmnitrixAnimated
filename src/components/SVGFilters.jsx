import React from 'react';

const SVGFilters = () => {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true" focusable="false">
      <defs>
        <filter id="glitch-filter">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            result="red"
          />
          <feOffset in="red" dx="2" dy="0" result="red-offset" />
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
            result="green"
          />
          <feOffset in="green" dx="-2" dy="0" result="green-offset" />
          <feBlend in="red-offset" in2="green-offset" mode="screen" result="blend" />
          <feBlend in="blend" in2="SourceGraphic" mode="screen" />
        </filter>

        <filter id="noise" color-interpolation-filters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.08" />
          </feComponentTransfer>
          <feBlend mode="overlay" in2="SourceGraphic" />
        </filter>
        
        <filter id="grain" color-interpolation-filters="sRGB">
          <feTurbulence type="turbulence" baseFrequency="0.5" numOctaves="1" result="turbulence" />
          <feColorMatrix type="saturate" values="0" in="turbulence" result="colormatrix" />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR type="linear" slope="2" intercept="-0.5" />
            <feFuncG type="linear" slope="2" intercept="-0.5" />
            <feFuncB type="linear" slope="2" intercept="-0.5" />
          </feComponentTransfer>
          <feBlend mode="soft-light" in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
      </defs>
    </svg>
  );
};

export default SVGFilters;
