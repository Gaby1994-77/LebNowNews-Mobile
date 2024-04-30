// CustomDrawerContent.tsx

import React from 'react';
import {View, Text, Image} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {drawerItems} from '../atoms/DrawerItems';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {resetAuth} from '../../redux/authActions';
import {styles} from './CustomDrawerContent.styles';
import LogoutButton from '../atoms/LogoutButton';

type DrawerItemKeyType = keyof typeof drawerItems;
type Props = {
  navigation: DrawerNavigationProp<{}>;
};

const CustomDrawerContent: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetAuth());
  };

  const handlePress = (screenName: DrawerItemKeyType) => {
    navigation.navigate(screenName as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assests/images/Logo.jpg')}
          style={styles.logoImage}
        />
        <Text style={styles.appTitle}>LebNow</Text>
      </View>
      {drawerItems.map((item, index) => (
        <DrawerItem
          key={index}
          label={item.label}
          onPress={() => handlePress(item.screenName as DrawerItemKeyType)}
          icon={() => (
            <Image source={item.Image} style={{width: 24, height: 24}} />
          )}
        />
      ))}
      <LogoutButton onPress={handleLogout} />
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>App Version: 0.73.6</Text>
      </View>
    </View>
  );
};

export default CustomDrawerContent;
