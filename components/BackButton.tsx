import IconBtnLeft from '@/components/IconBtnLeft';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BackButtonProps {
  onPress: () => void;
  children?: React.ReactNode; // Para inserir o ícone SVG
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ onPress, children, label = 'Voltar' }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <IconBtnLeft onPress={onPress} />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  label: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default BackButton;
