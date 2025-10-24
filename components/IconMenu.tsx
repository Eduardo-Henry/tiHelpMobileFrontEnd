import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import IconMenuSvg from '../assets/images/iconMenu.svg';

interface Props {
  onPress?: () => void;
  size?: number;
}

export default function IconMenu({ onPress, size = 28 }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <IconMenuSvg width={size} height={size} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
