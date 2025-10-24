import Root from '@/app/styles';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconClose from '../assets/images/iconClose.svg';
import IconExit from '../assets/images/iconExit.svg';
import IconHistory from '../assets/images/iconHistory.svg';
import IconSettings from '../assets/images/iconSettings.svg';

const { width, height } = Dimensions.get("window");

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const router = useRouter();

  function goHistory() {
    onClose && onClose();
    router.push({ pathname: '/history' });
  }

  function goSettings() {
    onClose && onClose();
  }

  function handleLogout() {
    onClose && onClose();
    router.replace('/login');
  }

  return (
    <View style={local.overlay}>
      <View style={local.container}>
        {/* Botão de fechar */}
        <TouchableOpacity
          style={local.closeBtn}
          onPress={() => {
            try {
              router.back();
            } catch (e) {}
            onClose && onClose();
          }}
        >
          <Text style={local.closeText}>
            <IconClose width={22} height={22} />
          </Text>
        </TouchableOpacity>

        {/* Corpo da sidebar */}
        <View style={local.body}>
          <View>
            <TouchableOpacity style={local.item} onPress={goHistory}>
              <IconHistory width={22} height={22} />
              <Text style={local.text}>Histórico</Text>
            </TouchableOpacity>

            <TouchableOpacity style={local.item} onPress={goSettings}>
              <IconSettings width={22} height={22} />
              <Text style={local.text}>Configurações</Text>
            </TouchableOpacity>
          </View>

          <View>
            <View style={local.divider} />
            <TouchableOpacity style={local.item} onPress={handleLogout}>
              <IconExit width={22} height={22} />
              <Text style={local.text}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const local = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
    backgroundColor: "rgba(0,0,0,0.5)", // fundo semi-transparente fora da sidebar
  },
  container: {
    width: width * 0.7, // ocupa 70% da largura
    height: "100%",
    paddingLeft: -48,
    backgroundColor: Root.colors.surface,
    paddingTop: 0,
  },
  closeBtn: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  closeText: {
    color: Root.colors.text,
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    flex: 0.5,
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  text: {
    color: Root.colors.text,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginBottom: 14,
  },
});
