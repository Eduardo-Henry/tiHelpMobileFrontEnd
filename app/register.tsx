import styles from '@/app/register.styles';
import IconBtnLeft from '@/components/IconBtnLeft';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import MeuBotao from '../components/MeuBotao';
export const options = {
  headerShown: false,
};

export default function RegisterScreen() {
  const router = useRouter();
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <IconBtnLeft onPress={() => router.back()} />
            <View style={{ flex: 1 }} />
          </View>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Crie uma <Text style={styles.bold}>conta nova</Text></Text>
          <Text style={styles.subtitle}>Já possui uma conta? <Text style={styles.link}>Entre aqui!</Text></Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>SEU NOME</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome..." placeholderTextColor="#bdbdbd" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>SEU EMAIL</Text>
            <TextInput style={styles.input} placeholder="Insira seu email..." placeholderTextColor="#bdbdbd" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>SUA SENHA</Text>
            <TextInput style={styles.input} placeholder="Insira sua senha..." placeholderTextColor="#bdbdbd" secureTextEntry />
          </View>
          <MeuBotao title="Criar conta" onPress={() => router.push('/tickets')} style={styles.registerButton} />
        </View>
      </View>
    );
}
