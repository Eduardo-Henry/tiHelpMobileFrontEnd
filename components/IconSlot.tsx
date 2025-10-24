import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  size?: number;
  children?: React.ReactNode;
}

export default function IconSlot({ size = 40, children }: Props) {
  return (
    <View style={[styles.slot, { width: size, height: size }]}>
      {children /* Replace this with your SVG when ready */}
    </View>
  );
}

const styles = StyleSheet.create({
  slot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
