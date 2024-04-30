import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#eef2f3',
  },
  card: {
    borderRadius: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    elevation: 50,
    marginLeft: 19,
    marginRight: 15,
    margin: 15,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  rating: {
    flexDirection: 'row',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 30,
    width: 300,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 10,
  },
});

export default styles;
