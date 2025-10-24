import styles from '@/app/tickets.styles';
import IconNotification from '@/components/IconNotification';
import Menu from '@/components/Menu';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const sample = {
  'Abril de 2025': [
    { id: 1, title: 'Não consigo encontrar o...', date: '20 de abril' },
    { id: 2, title: 'Como faço para logar na m...', date: '12 de abril' },
  ],
  'Março de 2025': [
    { id: 3, title: 'Olá, tudo bem? Como eu po...', date: '05 de março' },
  ],
};

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Menu />
        <IconNotification />
      </View>
      <ScrollView contentContainerStyle={{ padding: 18 }}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700', marginBottom: 12 }}>Histórico</Text>
        {Object.entries(sample).map(([month, items]) => (
          <View key={month} style={{ marginBottom: 18 }}>
            <Text style={{ color: '#9aa3a8', marginBottom: 8 }}>{month}</Text>
            {items.map((it) => (
              <TouchableOpacity key={it.id} style={localStyles.card}>
                <Text style={localStyles.cardTitle}>{it.title}</Text>
                <Text style={localStyles.cardDate}>{it.date}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  card: {
    backgroundColor: '#162026',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: '600',
  },
  cardDate: {
    color: '#9aa3a8',
    marginTop: 6,
  },
});
