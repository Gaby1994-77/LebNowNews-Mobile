import React from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import {Image, Alert} from 'react-native';

type Props = {
  onPress: () => void;
};

const LogoutButton: React.FC<Props> = ({onPress}) => {
  const handleLogoutPress = () => {
    Alert.alert(
      'Are you sure you want to log out?',
      '',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Log Out',
          onPress: onPress,
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <DrawerItem
      label="Logout"
      onPress={handleLogoutPress}
      icon={() => (
        <Image
          source={require('../../assests/drawer/logout.png')}
          style={{width: 24, height: 24}}
        />
      )}
    />
  );
};

export default LogoutButton;
