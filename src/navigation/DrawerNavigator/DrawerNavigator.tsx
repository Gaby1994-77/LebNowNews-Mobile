import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../../components/Molecules/CustomDrawerContent';
import TabNavigation from '../TabNavigator/TabNavigator';
import ProfileScreen from '../../pages/SavedNews/SavedNews';
import AboutUsScreen from '../../pages/AboutUsScreen/AboutUsScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tab"
      drawerContent={(
        props: React.JSX.IntrinsicAttributes & {navigation: any},
      ) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Tab"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Saved News" component={ProfileScreen} />
      <Drawer.Screen name="About Us" component={AboutUsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
