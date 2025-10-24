import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '400',
    marginBottom: 4,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#7B5CFA',
  },
  header: {
    backgroundColor: '#7B5CFA',
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  backIcon: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#23263A',
    paddingTop: 88,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  
  subtitle: {
    color: '#bdbdbd',
    fontSize: 14,
    marginBottom: 104,
    textAlign: 'center',
  },
  link: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    backgroundColor: '#181A20',
    borderRadius: 12,
    padding: 22,
    color: '#fff',
    fontSize: 15,
  },
  registerButton: {
    marginTop: 34,
  }
});

export default styles;
