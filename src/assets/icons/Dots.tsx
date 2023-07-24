import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function DotsIcon() {
  return (
    <Svg width={4} height={18} viewBox="0 0 4 18" fill="none">
      <Path
        d="M1 9C1 9.55228 1.44772 10 2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9Z"
        fill="white"
      />
      <Path
        d="M1 16C1 16.5523 1.44772 17 2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16Z"
        fill="white"
      />
      <Path
        d="M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z"
        fill="white"
      />
      <Path
        d="M1 9C1 9.55228 1.44772 10 2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 16C1 16.5523 1.44772 17 2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
