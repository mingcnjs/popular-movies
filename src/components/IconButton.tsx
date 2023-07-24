import React, {FC, MutableRefObject} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 28,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = TouchableOpacityProps & {
  innerRef?: MutableRefObject<TouchableOpacity>;
};

const IconButton: FC<Props> = props => {
  const {
    children,
    innerRef,
    style,
    activeOpacity = 0.7,
    ...touchableProps
  } = props;
  return (
    <TouchableOpacity
      {...touchableProps}
      ref={innerRef}
      style={[styles.button, style]}
      activeOpacity={activeOpacity}>
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
