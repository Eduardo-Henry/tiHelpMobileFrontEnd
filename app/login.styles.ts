import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#8979FF',
  },
  header: {
    backgroundColor: '#8979FF',
    paddingTop: 64,
    paddingBottom: 24,
    alignItems: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  formContainer: {
    backgroundColor: '#23263A',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 42,
    marginTop: 136,
    alignItems: 'center',
    flex: 1,
  },
  welcome: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#181A20',
    borderRadius: 12,
    padding: 12,
    color: '#fff',
    marginBottom: 16,
    fontSize: 16,
  },
  createAccountButton: {
    width: '100%',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  createAccountText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;