import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Svg from 'react-native-svg';

interface Props {
  onPress?: () => void;
}

export default function IconBtnLeft({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <Svg width={28} height={28} >
        
      </Svg>
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
