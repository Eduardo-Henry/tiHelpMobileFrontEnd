import Root from '@/app/styles';
import IconNotification from '@/components/IconNotification';
import Menu from '@/components/Menu';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './tickets.styles';

export default function ShowTechnician() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Menu />
        <IconNotification />
      </View>

      <View style={{ padding: 18 }}>
        <View style={local.topRow}>
          <Image source={require('../assets/images/partial-react-logo.png')} style={local.avatar} /><Image source={require('../assets/images/partial-react-logo.png')} style={local.avatar} />
          <View>
            <Text style={local.name}>Fernando Rocha</Text>
            <Text style={local.status}>Online</Text>
          </View>
        </View>

        <View style={local.card}>
          <Text style={local.title}>Fernando aceitou seu chamado!</Text>
          <Text style={local.subtitle}>Ele está a caminho. Clique para abrir conversa ou voltar para tickets.</Text>
        </View>

        <TouchableOpacity style={local.openChat} onPress={() => router.push({ pathname: '/chat/[id]', params: { id: '1' } })}>
          <Text style={{ color: '#fff', fontWeight: '700' }}>Abrir conversa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={local.back} onPress={() => router.push({ pathname: '/tickets' })}>
          <Text style={{ color: Root.colors.primary, fontWeight: '700' }}>Voltar para tickets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const local = StyleSheet.create({
  topRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 18 },
  avatar: { width: 64, height: 64, borderRadius: 32, marginRight: 12 },
  name: { color: '#fff', fontWeight: '700', fontSize: 18 },
  status: { color: Root.colors.primary, fontSize: 12 },
  card: { backgroundColor: '#162026', padding: 12, borderRadius: 12, marginBottom: 18 },
  title: { color: '#fff', fontWeight: '700' },
  subtitle: { color: '#9aa3a8', marginTop: 8 },
  openChat: { backgroundColor: Root.colors.primary, padding: 12, borderRadius: 12, alignItems: 'center', marginBottom: 12 },
  back: { alignItems: 'center', marginTop: 8 },
});
