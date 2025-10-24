// ...existing code...
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Logo from '../assets/images/logoTiHelp.svg';
import MeuBotao from '../components/MeuBotao';
import styles from './login.styles';
export const options = {
  headerShown: false,
};
export default function LoginScreen() {
  const router = useRouter();
  const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
  // reduce previous size by ~30%
  const logoHeight = Math.round(screenHeight * 0.25 * 0.7);
  const logoWidth = Math.round(screenWidth * 0.7);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: logoHeight, marginTop: 200 }}>
          <Logo width={logoWidth} height={logoHeight} />
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.welcome}>Seja Bem-Vindo(a)</Text>
        <MeuBotao title="Entrar" onPress={() => router.push('/')} />
        <TouchableOpacity style={styles.createAccountButton} onPress={() => router.push('/register')}>
          <Text style={styles.createAccountText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
