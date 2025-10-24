import Root from '@/app/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Root.colors.surface,
    padding: 12,
  },
  pageTitle: {
    color: '#9AA3A8',
    marginBottom: 8,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    minHeight: 180,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContent: {
    flex: 1,
    paddingHorizontal: 12,
  },
  welcomeTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  welcomeSub: {
    color: '#9aa3a8',
    fontSize: 12,
    marginTop: 4,
  },
  processTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  processSubtitle: {
    color: '#bdbdbd',
    fontSize: 12,
    marginTop: 6,
  },
  iconRow: {
    flexDirection: 'row',
    gap: 8,
  },
  filtersRow: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  createArea: {
    flex: 1,
    backgroundColor: '#121416',
    padding: 24,
    justifyContent: 'center',
  },
  createTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'left',
  },
  createSubtitle: {
    color: '#bdbdbd',
    fontSize: 15,
    marginBottom: 18,
    textAlign: 'left',
  },
  urgencyRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  urgencyPill: {
    backgroundColor: '#2a2f33',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 24,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  urgencyActive: {
    backgroundColor: '#7B5CFA',
  },
  urgencyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  urgencyTextActive: {
    color: '#fff',
    fontWeight: '700',
  },
  problemLabel: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  problemInput: {
    backgroundColor: '#181A20',
    height: 190,
    borderRadius: 12,
    padding: 18,
    color: '#fff',
    fontSize: 15,
    minHeight: 120,
      marginBottom: 18,
    alignItems: 'center',
  },
  voltarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },
  filtersScroll: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  filterSpacing: {
    marginRight: 12,
  },
  filterPill: {
    backgroundColor: '#2a2f33',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 24,
    minWidth: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  filterPillActive: {
    backgroundColor: '#7B5CFA',
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: '700',
  },
  fabBar: {
    position: 'absolute',
    bottom: 16,
    left: 12,
    right: 12,
    height: 64,
    backgroundColor: '#162026',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ticketBox: {
    backgroundColor: '#1f2630',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  ticketText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  ticketTitle: {
    color: '#bdbdbd',
    textAlign: 'center',
  },
  notificationOverlay: {
    position: 'absolute',
    top: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 50,
  },
  notifBubble: {
    backgroundColor: '#0f1618',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    maxWidth: '92%',
  },
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifText: {
    color: '#fff',
    flex: 1,
  },
  notifActions: {
    marginLeft: 8,
    alignItems: 'center',
  },
  notifExibir: {
    color: '#7B5CFA',
    fontWeight: '700',
  },
  notifClose: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 8,
  },
});

export default styles;
