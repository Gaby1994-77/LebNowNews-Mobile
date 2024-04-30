import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setRefreshToken, setToken} from '../../redux/authActions';
import {useNavigation} from '@react-navigation/native';
import styles from './LoginScreen.Styles';
import Toast from 'react-native-toast-message';

const LoginScreen = () => {
  const [email, setEmail] = useState('Samir');
  const [password, setPassword] = useState('123');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loginUser = async (email: string, password: string) => {
    try {
      const response = await fetch(
        'https://backend-practice.euriskomobility.me/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            token_expires_in: '1m',
          }),
        },
      );
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || 'Login failed');
      }
      const {accessToken, refreshToken} = responseData;
      await AsyncStorage.setItem('userToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);
      dispatch(setToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
      console.log('token access', accessToken);
      console.log('token refreshed', refreshToken);
      Toast.show({
        type: 'success',
        text2: 'logged in successfully 👋',
      });
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: errorMessage,
      });
    }
  };
  const handleLogin = () => {
    loginUser(email, password);
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp' as never);
  };
  return (
    <ImageBackground
      source={require('../../assests/images/background.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome To LebNow</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>
            Don't have an account?
            <Text style={styles.signUpLink}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default LoginScreen;
