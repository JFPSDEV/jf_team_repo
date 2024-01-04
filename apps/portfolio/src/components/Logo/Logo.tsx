import React from 'react';

interface LogoProps {
  size?: number;
  color?: string;
}

export const Logo = (props: LogoProps) => {
  const { size, color } = props;

  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width={size || '495'}
      height={size || '327'}
      viewBox='0 0 495.000000 327.000000'
      preserveAspectRatio='xMidYMid meet'
      fill={color || '#000000'}
      stroke='none'
    >
      <g
        transform='translate(0.000000,327.000000) scale(0.100000,-0.100000)'
        fill={color || '#000000'}
        stroke='none'
      >
        <path d='M1753 3262 l-293 -2 0 -1063 c0 -1154 1 -1126 -56 -1208 -15 -22 -54 -59 -87 -84 -69 -51 -125 -66 -256 -68 -115 -2 -177 19 -230 79 -21 24 -45 44 -54 44 -9 0 -25 25 -41 64 -75 188 -108 235 -199 283 -47 25 -62 27 -152 28 -86 0 -109 -4 -163 -27 -71 -30 -143 -96 -181 -167 -23 -43 -25 -56 -26 -181 0 -159 11 -204 89 -354 44 -85 67 -115 161 -211 109 -110 203 -184 293 -229 221 -110 526 -147 758 -91 128 31 219 65 304 113 36 20 72 40 80 43 26 11 184 155 226 206 104 126 154 214 206 365 l31 93 10 640 c5 377 6 864 1 1185 l-9 545 -60 0 c-33 0 -192 -1 -352 -3z' />
        <path d='M3130 3261 c-36 -4 -100 -22 -142 -40 -143 -60 -242 -199 -263 -368 l-7 -53 104 0 103 0 33 63 c51 97 113 157 163 157 15 0 31 -6 36 -12 20 -27 43 -206 43 -340 0 -114 3 -138 17 -149 9 -8 25 -34 36 -58 53 -119 -20 -338 -124 -373 -37 -12 -44 -19 -55 -57 -7 -24 -29 -61 -49 -81 -21 -21 -40 -52 -44 -70 -5 -27 -13 -34 -51 -47 -32 -10 -62 -33 -102 -75 -99 -105 -92 -39 -96 -950 l-3 -798 416 0 415 0 0 600 0 600 425 0 425 0 0 380 0 380 -425 0 -425 0 0 248 0 248 693 -1 692 0 3 398 2 397 -522 0 c-288 0 -683 2 -878 4 -195 3 -384 1 -420 -3z' />
        <path d='M2180 3035 l0 -75 80 0 c44 0 80 4 80 9 0 10 -141 141 -152 141 -5 0 -8 -34 -8 -75z' />
        <path d='M2340 2931 c0 -17 42 -123 62 -158 19 -32 23 -33 80 -33 57 0 59 1 53 23 -12 38 -34 65 -87 107 -60 48 -108 75 -108 61z' />
        <path d='M2907 2533 c-4 -3 -7 -35 -7 -70 0 -109 -40 -172 -114 -180 -50 -6 -51 -7 -59 -64 l-5 -36 65 -27 c-36 -15 -67 -25 -69 -23 2 1 -2 34 -8 71 -13 78 -16 74 82 131 133 78 141 84 165 137 13 28 22 55 19 60 -6 10 -198 11 -207 1z' />
        <path d='M2442 2503 c-45 -38 -39 -65 27 -136 52 -55 69 -67 113 -77 46 -12 52 -11 65 6 19 26 17 40 -20 135 l-33 84 -65 3 c-52 2 -70 -1 -87 -15z' />
      </g>
    </svg>
  );
};