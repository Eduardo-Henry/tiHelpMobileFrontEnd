import Root from '@/app/styles';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ChatDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View style={local.container}>
      <View style={local.header}>
        <TouchableOpacity onPress={() => router.back()} style={local.backBtn}>
          <Text style={local.backText}>◀</Text>
        </TouchableOpacity>

        <View style={local.infoRow}>
          <Image source={require('../../assets/images/partial-react-logo.png')} style={local.avatar} />
          <View>
            <Text style={local.name}>Fernando Rocha</Text>
            <Text style={local.status}>Online</Text>
          </View>
        </View>

        <View style={{ width: 44 }} />
      </View>

      <View style={local.messagesArea}>
        <View style={local.receivedBubble}>
          <Text style={local.msgText}>Olá, pelo o que li do seu problema, você poderia reiniciar seu computador?</Text>
          <Text style={local.msgTime}>11:24</Text>
        </View>
      </View>

      <View style={local.inputRow}>
        <TextInput placeholderTextColor="#9AA3A8" placeholder="Digite aqui..." style={local.input} />
      </View>
    </View>
  );
}

const local = StyleSheet.create({
  container: { flex: 1, backgroundColor: Root.colors.background },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12 },
  backBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  backText: { color: Root.colors.text, fontSize: 20 },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 44, height: 44, borderRadius: 22 },
  name: { color: Root.colors.text, fontWeight: '700' },
  status: { color: Root.colors.primary, fontSize: 12 },
  messagesArea: { flex: 1, padding: 12 },
  receivedBubble: { backgroundColor: Root.colors.chatBubble, padding: 12, borderRadius: 16, alignSelf: 'flex-start', maxWidth: '80%' },
  msgText: { color: Root.colors.text },
  msgTime: { color: Root.colors.subtleText, marginTop: 8, fontSize: 12, alignSelf: 'flex-end' },
  inputRow: { padding: 12, backgroundColor: Root.colors.background },
  input: { backgroundColor: '#162026', borderRadius: 24, paddingHorizontal: 16, paddingVertical: 12, color: Root.colors.text },
});
