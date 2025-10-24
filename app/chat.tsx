import styles from '@/app/tickets.styles';
import IconNotification from '@/components/IconNotification';
import Menu from '@/components/Menu';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ChatScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Menu />
        <IconNotification />
      </View>

      <View style={{ padding: 18 }}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700', marginBottom: 12 }}>Conversas Recentes</Text>

  <TouchableOpacity style={local.card} onPress={() => router.push({ pathname: '/chat/[id]', params: { id: '1' } })}>
          <Image source={require('../assets/images/partial-react-logo.png')} style={local.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={local.title}>Fernando Rocha</Text>
            <Text style={local.subtitle}>Olá, pelo o que li do seu problema...</Text>
          </View>
          <Text style={local.time}>11:23</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const local = StyleSheet.create({
  card: {
    backgroundColor: '#162026',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: { width: 44, height: 44, borderRadius: 22, marginRight: 12 },
  title: { color: '#fff', fontWeight: '700' },
  subtitle: { color: '#9aa3a8', marginTop: 4 },
  time: { color: '#9aa3a8', marginLeft: 8 },
});
