import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from 'react-native';
import {layoutColors} from '../constants/layoutColors';

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Loading(props: ActivityIndicatorProps) {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={layoutColors.black} {...props} />
    </View>
  );
}
