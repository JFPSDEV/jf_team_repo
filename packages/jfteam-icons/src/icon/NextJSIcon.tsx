import React from 'react';

import type { IconProps } from '../types';

interface NextJSIconProps extends IconProps {}

export const NextJSIcon = (props: NextJSIconProps) => {
  const { size, color = '#000000', ...other } = props;

  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width={size || '737px'}
      height={size || '737px'}
      viewBox='0 0 737 737'
      preserveAspectRatio='xMidYMid meet'
      {...other}
    >
      <g
        transform='translate(0.000000,737.000000) scale(0.100000,-0.100000)'
        fill={color}
        stroke='none'
      >
        <path
          d='M1710 7350 c-262 -14 -441 -43 -613 -100 -536 -180 -916 -616 -1032
-1185 -48 -235 -48 -210 -52 -2220 -5 -2225 -2 -2329 73 -2628 142 -570 579
-1002 1150 -1135 302 -71 427 -74 2624 -68 1733 4 2027 8 1960 25 -17 5 -47
38 -94 106 -110 161 -406 595 -642 945 -58 85 -151 223 -208 305 -56 83 -212
312 -346 510 -134 198 -275 405 -313 460 -37 55 -111 163 -163 240 -52 77
-187 275 -299 440 -112 165 -274 404 -360 530 -86 127 -217 320 -292 430 -75
110 -197 290 -271 400 -74 110 -165 243 -201 295 l-66 95 -5 -1500 c-6 -1688
2 -1536 -84 -1612 -56 -49 -134 -74 -231 -75 -140 0 -247 57 -294 157 l-21 45
0 2015 0 2015 22 46 c74 159 383 183 543 43 20 -18 123 -163 229 -323 674
-1016 851 -1284 1034 -1561 113 -170 341 -515 507 -765 166 -250 413 -624 550
-830 136 -206 394 -595 573 -865 399 -601 647 -977 764 -1155 48 -74 92 -141
98 -147 18 -22 50 -104 50 -128 0 -24 0 -24 43 -9 80 28 223 104 315 167 271
187 471 449 580 758 114 326 121 476 121 2619 0 1829 -7 2126 -58 2385 -125
628 -601 1102 -1236 1230 -241 49 -212 48 -2270 50 -1062 1 -2000 -1 -2085 -5z
m3770 -1246 c83 -19 142 -54 172 -101 l23 -38 2 -1795 c2 -987 -1 -1798 -5
-1802 -4 -4 -30 27 -58 70 -303 460 -504 768 -540 827 l-30 50 1 1325 c2 1224
3 1327 19 1358 49 95 249 146 416 106z'
        />
        <path d='M5978 53 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z' />
        <path d='M5903 43 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z' />
      </g>
    </svg>
  );
};
