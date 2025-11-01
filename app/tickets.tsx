
import Root from '@/app/styles';
import ChamadoEnviado from '@/components/ChamadoEnviado';
import IconNotification from '@/components/IconNotification';
import Menu from '@/components/Menu';
import MeuBotao from '@/components/MeuBotao';
import NavBottomBar from '@/components/NavBottomBar';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import IconChat from '../assets/images/iconChat.svg';
import IconHomeFilled from '../assets/images/iconHomeFilled.svg';
import ImgTicketNotCreated from '../assets/images/imgTicketNotCreated.svg';
import styles from './tickets.styles';


export default function TicketsScreen() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'progress' | 'done'>('all');
  const [showCreate, setShowCreate] = useState(false);
  const [urgency, setUrgency] = useState<'baixa' | 'media' | 'alta'>('baixa');
  const [problem, setProblem] = useState('');
  const [sending, setSending] = useState(false);
  const [tickets, setTickets] = useState<Array<{ id: number; title: string; number: number }>>([]);
  const { height: screenHeight } = Dimensions.get('window');
  // use a small fixed spacing so the welcome text appears under the menu icon
  const downOffset = 12;
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [acceptedTech, setAcceptedTech] = useState<string | null>(null);
  const router = useRouter();

  function handleSend() {
    // start animation overlay
    setShowCreate(false);
    setSending(true);
  }

  function onAnimationComplete() {
    // create ticket and add to list
    const newTicket = {
      id: Date.now(),
      title: problem || 'Chamado sem título',
      number: Math.floor(1000 + Math.random() * 9000),
    };
    setTickets((t) => [newTicket, ...t]);
    setProblem('');
    setUrgency('baixa');
    setSending(false);
    // simulate a technician accepting this ticket
    setAcceptedTech('Fernando');
  }

  return (
    <View style={styles.container}>
      {!showCreate ? (
        <>
          <Text style={styles.pageTitle}>Área de Tickets - Criados</Text>
          <View style={styles.card}>
            <View style={styles.headerRow}>
              <Menu />
              <IconNotification onPress={() => setNotificationVisible(true)} />
            </View>
            <View style={{ marginTop: downOffset }}>
              {activeFilter === 'progress' ? (
                <View>
                  <Text style={styles.processTitle}>Fique por dentro do processo!</Text>
                  <Text style={styles.processSubtitle}>Clique e acompanhe todos os tickets em progresso</Text>
                </View>
              ) : (
                <View style={styles.headerContent}>
                  <Text style={styles.welcomeTitle}>Bem-Vindo, Eduardo!</Text>
                  <Text style={styles.welcomeSub}>Escolha outro ticket ou crie outro chamado no botão &quot;+&quot;</Text>
                </View>
              )}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.filtersScroll}
              >
                <TouchableOpacity onPress={() => setActiveFilter('all')} style={[styles.filterPill, activeFilter === 'all' && styles.filterPillActive, styles.filterSpacing]}>
                  <Text style={[styles.filterText, activeFilter === 'all' && styles.filterTextActive]}>Todos os Tickets</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveFilter('progress')} style={[styles.filterPill, activeFilter === 'progress' && styles.filterPillActive, styles.filterSpacing]}>
                  <Text style={[styles.filterText, activeFilter === 'progress' && styles.filterTextActive]}>Em Progresso</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveFilter('done')} style={[styles.filterPill, activeFilter === 'done' && styles.filterPillActive]}>
                  <Text style={[styles.filterText, activeFilter === 'done' && styles.filterTextActive]}>Finalizados</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
          {/* show empty illustration when no tickets created yet */}
          {!showCreate && tickets.length === 0 && (
            <View style={{ alignItems: 'center', marginTop: 24 }}>
              <ImgTicketNotCreated width={250} height={250} />
              <Text style={{ color: '#9AA3A8', marginTop: 12, fontSize: 14, textAlign: 'center' }}>nenhum ticket criado ainda</Text>
              <Text style={{ color: '#bdbdbd', marginTop: 6, fontSize: 14, textAlign: 'center' }}>crie um chamado no botão “+”.</Text>
            </View>
          )}

          <NavBottomBar
            onCenterPress={() => setShowCreate(true)}
            onRightPress={() => router.push({ pathname: '/chat' })}
            Left={<IconHomeFilled width={28} height={28} />}
            Right={<IconChat width={28} height={28} />}
          />
          {sending && <ChamadoEnviado onComplete={onAnimationComplete} />}

          {/* If tickets exist, show a highlighted ticket button and cancel hint */}
          {!showCreate && tickets.length > 0 && (
            <View style={{ alignItems: 'center', marginTop: 18 }}>
              <TouchableOpacity style={{ backgroundColor: Root.colors.primary, paddingVertical: 14, paddingHorizontal: 32, borderRadius: 12 }} onPress={() => router.push({ pathname: '/showtechnician' })}>
                <Text style={{ color: '#fff', fontWeight: '700' }}>Ticket #{tickets[0].number}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push({ pathname: '/cancel' })} style={{ marginTop: 12 }}>
                <Text style={{ color: '#9aa3a8' }}>Clique aqui para cancelar chamados</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      ) : (
        <View style={styles.createArea}>
          <View style={styles.headerRow}>
            <Menu />
          </View>
          <Text style={styles.createTitle}>Bem-Vindo, Eduardo</Text>
          <Text style={styles.createSubtitle}>Compartilhe conosco:
            <Text style={{ fontWeight: 'bold' }}> Qual o nível de urgência?</Text>
          </Text>
          <View style={styles.urgencyRow}>
            <TouchableOpacity style={[styles.urgencyPill, urgency === 'baixa' && styles.urgencyActive]} onPress={() => setUrgency('baixa')}>
              <Text style={[styles.urgencyText, urgency === 'baixa' && styles.urgencyTextActive]}>1-Baixa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.urgencyPill, urgency === 'media' && styles.urgencyActive]} onPress={() => setUrgency('media')}>
              <Text style={[styles.urgencyText, urgency === 'media' && styles.urgencyTextActive]}>2-Média</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.urgencyPill, urgency === 'alta' && styles.urgencyActive]} onPress={() => setUrgency('alta')}>
              <Text style={[styles.urgencyText, urgency === 'alta' && styles.urgencyTextActive]}>3-Alta</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.problemLabel}>Descreva o seu problema no campo abaixo</Text>
          <TextInput
            style={styles.problemInput}
            placeholder="Escreva seu problema aqui..."
            placeholderTextColor="#bdbdbd"
            multiline
            value={problem}
            onChangeText={setProblem}
          />
          <MeuBotao title="Enviar" onPress={handleSend} />
          <TouchableOpacity onPress={() => setShowCreate(false)}>
            <Text style={styles.voltarText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Lista de tickets criados (aparece abaixo dos filtros) */}
      {!showCreate && tickets.length > 0 && (
        <View style={{ paddingHorizontal: 12, marginTop: 16 }}>
          {tickets.map((t) => (
            <TouchableOpacity key={t.id} style={styles.ticketBox} onPress={() => router.push({ pathname: '/showtechnician' })}>
              <Text style={styles.ticketText}>Ticket #{t.number}</Text>
              <Text style={styles.ticketTitle}>{t.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {/* notificação: quem aceitou */}
      {notificationVisible && acceptedTech && (
        <View style={styles.notificationOverlay} pointerEvents="box-none">
          <View style={styles.notifBubble}>
            <View style={styles.avatarCircle}>
              <Text style={{ fontWeight: '700' }}>{acceptedTech.charAt(0)}</Text>
            </View>
            <Text style={styles.notifText}>{acceptedTech} aceitou seu chamado!</Text>
            <View style={styles.notifActions}>
              <TouchableOpacity onPress={() => setNotificationVisible(false)}>
                <Text style={styles.notifExibir}>Exibir</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setNotificationVisible(false)}>
              <Text style={styles.notifClose}>×</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

