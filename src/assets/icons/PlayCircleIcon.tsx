import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function PlayCircleIcon() {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
        stroke="#746A64"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 7L15 11L9 15V7Z"
        stroke="#746A64"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
