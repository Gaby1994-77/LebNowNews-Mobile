import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
    marginTop: 25,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  versionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  versionText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 350,
  },
});
