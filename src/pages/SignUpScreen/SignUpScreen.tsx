import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setToken} from '../../redux/authActions';
import styles from './SignUpScreen.Styles';
import {baseUrl} from '../../utilities/api';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const registerUser = async (email: string, password: string) => {
    try {
      const response = await fetch(`${baseUrl}signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          token_expires_in: '15m',
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || 'Registration failed');
      }
      const {accessToken} = responseData;
      await AsyncStorage.setItem('userToken', accessToken);
      dispatch(setToken(accessToken));
      Alert.alert('Registration Successful', 'User created successfully');
    } catch (error) {
      let errorMessage = 'An unexpected error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      Alert.alert('Registration Failed', errorMessage);
    }
  };
  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Registration Failed', 'All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Registration Failed', 'Passwords do not match');
      return;
    }
    registerUser(email, password);
  };
  return (
    <ImageBackground
      source={require('../../assests/images/background.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default RegisterScreen;
