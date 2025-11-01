import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import IconHomeFilled from '../assets/images/iconHomeFilled.svg';

interface Props {
  onPress?: () => void;
}

export default function IconBtnLeft({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <IconHomeFilled width={28} height={28} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
});
