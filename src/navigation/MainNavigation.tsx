import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import AppNavigator from './AppNavigator';
import DrawerNavigation from './DrawerNavigator/DrawerNavigator';

const MainNavigation = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const isAuthenticated = token !== null;

  return (
    <NavigationContainer>
      {isAuthenticated ? <DrawerNavigation /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigation;
