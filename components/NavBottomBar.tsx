
import Root from '@/app/styles';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  onCenterPress?: () => void;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  Left?: React.ReactNode;
  Right?: React.ReactNode;
}

function CenterFab({ onPress }: { onPress?: () => void }) {
  return (
    <TouchableOpacity style={styles.fabOuter} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.fabInner}>
        <Text style={styles.fabPlus}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function NavBottomBar({ onCenterPress, onLeftPress, onRightPress, Left, Right }: Props) {
  const [expanded, setExpanded] = useState(false);

  function handleOpen() {
    setExpanded(true);
  }

  function handleClose() {
    setExpanded(false);
  }

  function handleCreate() {
    setExpanded(false);
    if (onCenterPress) onCenterPress();
  }

  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <View style={styles.container}>
        <TouchableOpacity style={styles.sideSlot} onPress={onLeftPress} activeOpacity={0.8}>
          <View style={styles.leftRect} />
          {Left}
        </TouchableOpacity>
        <View style={styles.fabSlot}>
          {!expanded ? (
            <CenterFab onPress={handleOpen} />
          ) : (
            <View style={styles.fabSpacer} />
          )}
        </View>
        <TouchableOpacity style={styles.sideSlot} onPress={onRightPress} activeOpacity={0.8}>
          <View style={styles.rightRect} />
          {Right}
        </TouchableOpacity>
      </View>

      {/* Overlay: when expanded, show create pill + cancel button above the FAB */}
      {expanded && (
        <View style={styles.overlayContainer} pointerEvents="box-none">
          <TouchableOpacity style={styles.createPill} onPress={handleCreate} activeOpacity={0.85}>
            <Text style={styles.createText}>Criar Chamado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelBtn} onPress={handleClose} activeOpacity={0.85}>
            <Text style={styles.cancelText}>x</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
    alignItems: 'center',
  },
  container: {
    width: "110%",
    bottom: -12,
    height: 80,
    backgroundColor: Root.colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  sideSlot: {
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabSlot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftRect: {
    position: 'absolute',
    left: -8,
    top: -12,
    width: 56,
    height: 40,
    borderRadius: 10,
  },
  fabOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabInner: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#7B5CFA',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  fabPlus: {
    color: '#fff',
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '700',
  },
  fabSpacer: {
    width: 64,
    height: 64,
  },
  rightRect: {
    position: 'absolute',
    right: -8,
    top: -12,
    width: 56,
    height: 40,
    borderRadius: 10,
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8,
  },
  createPill: {
    backgroundColor: '#7B5CFA',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 24,
    minWidth: 160,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  createText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  cancelBtn: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginTop: 8,
  },
  cancelText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
