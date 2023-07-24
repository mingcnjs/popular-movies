import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {layoutColors} from '../constants/layoutColors';
import IconButton from './IconButton';
import BackArrowIcon from '../assets/icons/BackArrowIcon';
import DotsIcon from '../assets/icons/Dots';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: layoutColors.black,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: layoutColors.white,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

interface HeaderProps {
  title: string;
  headerBackVisible?: boolean;
  onPressBack?: () => void;
}

export default function Header(props: HeaderProps) {
  const {title, headerBackVisible, onPressBack} = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.right}>
        {headerBackVisible && (
          <IconButton onPress={onPressBack}>
            <BackArrowIcon />
          </IconButton>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <IconButton onPress={() => null}>
          <DotsIcon />
        </IconButton>
      </View>
    </View>
  );
}
