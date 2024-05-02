import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './AboutUsScreen.Styles';

const handlePress = () => {
  const websiteURL = 'https://github.com/Gaby1994-77/LebNowNews-Website.git';
  Linking.openURL(websiteURL).catch(err =>
    console.error('Failed to open link:', err),
  );
};
const AboutUsScreen = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../assests/images/Logo.jpg')}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>LebNow</Text>
        <Text style={styles.text}>
          Founded in 2024, LEbNow is committed to bringing you the latest news
          from around the globe. We strive to provide timely and accurate news
          to help keep our audience informed and connected with the world.
        </Text>
        <Text style={styles.text}>
          Our dedicated team of journalists and contributors spans across
          continents to bring you perspectives from every corner of the globe,
          ensuring that you receive a comprehensive view of world events as they
          unfold.
        </Text>
        <Text style={styles.text}>
          LebNow is more than just a news app; it's your daily window to the
          world. Join us on our journey to enlighten and inform.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Visit Our Website</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutUsScreen;
