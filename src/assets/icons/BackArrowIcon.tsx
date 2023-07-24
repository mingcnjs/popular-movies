import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function BackArrowIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M15 8H1M1 8L8 15M1 8L8 1"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
