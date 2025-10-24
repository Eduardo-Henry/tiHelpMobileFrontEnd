import Root from '@/app/styles';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './tickets.styles';

export default function CancelScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={{ padding: 18 }}>
        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 18, marginBottom: 12 }}>Cancele seu chamado agora mesmo!</Text>
        <Text style={{ color: '#9aa3a8', marginBottom: 18 }}>Acompanhe abaixo o
   Nível de urgência escolhido:</Text>

        <View style={{ flexDirection: 'row', gap: 12, marginBottom: 18 }}>
          <View style={[styles.urgencyPill, styles.urgencyActive]}><Text style={styles.urgencyTextActive}>1-Baixa</Text></View>
          <View style={[styles.urgencyPill]}><Text style={styles.urgencyText}>2-Média</Text></View>
          <View style={[styles.urgencyPill]}><Text style={styles.urgencyText}>3-Alta</Text></View>
        </View>

        <View style={{ borderWidth: 1, borderColor: '#2a2f33', padding: 12, borderRadius: 8, marginBottom: 18 }}>
          <Text style={{ color: '#fff' }}>Estou com problema com o desempenho do meu computador, o que devo fazer?</Text>
        </View>

        <TouchableOpacity style={{ backgroundColor: Root.colors.primary, padding: 12, borderRadius: 12, alignItems: 'center' }} onPress={() => router.push({ pathname: '/tickets' })}>
          <Text style={{ color: '#fff', fontWeight: '700' }}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center', marginTop: 12 }} onPress={() => router.push({ pathname: '/tickets' })}>
          <Text style={{ color: Root.colors.text }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
