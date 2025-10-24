import Root from '@/app/styles';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconMenuSvg from '../assets/images/iconMenu.svg';
import Sidebar from './Sidebar';

export default function Menu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const screenW = Dimensions.get('window').width;
  const anim = useRef(new Animated.Value(-screenW)).current;

  function openMenu() {
    setOpen(true);
    Animated.timing(anim, { toValue: 0, duration: 300, useNativeDriver: true }).start();
  }

  function closeMenu() {
    Animated.timing(anim, { toValue: -screenW, duration: 250, useNativeDriver: true }).start(() => setOpen(false));
  }

  function handleLogout() {
    // navigate to login screen
    router.replace('/login');
    closeMenu();
  }

  function goHistory() {
    closeMenu();
    router.push({ pathname: '/history' });
  }

  return (
    <>
      <TouchableOpacity onPress={openMenu} style={styles.iconBtn} activeOpacity={0.8}>
        <IconMenuSvg width={28} height={28} />
      </TouchableOpacity>

      {open && (
        <Animated.View style={[styles.drawer, { transform: [{ translateX: anim }] }]}>
          <View style={styles.closeRow}>
            <TouchableOpacity
              onPress={() => {
                try {
                  router.back();
                } catch (e) {
                  // ignore if cannot go back
                }
                closeMenu();
              }}
              style={styles.closeBtn}
            >
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
          </View>

          <Sidebar onClose={closeMenu} />
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    backgroundColor: Root.colors.muted,
    paddingTop: 48,
    paddingHorizontal: 18,
    zIndex: 999,
  },
  closeRow: {
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  closeBtn: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  menuList: {
    marginTop: 12,
    gap: 18,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#2a2f33',
    marginVertical: 18,
  },
});
