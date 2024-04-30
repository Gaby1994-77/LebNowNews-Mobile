import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import {tabStyles} from './TabNavigator.Style';
import DrawerToggleButton from '../../components/Molecules/DrawerToggleButton';
import HomeScreen from '../../pages/HomeScreen/HomeScreen';
import ProfileScreen from '../../pages/SavedNews/SavedNews';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitle: 'News',
          headerLeft: () => <DrawerToggleButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: tabStyles.tabBarStyle,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({navigation}) => ({
          headerTitle: 'News',
          headerLeft: () => <DrawerToggleButton navigation={navigation} />,
          headerShown: false,
          headerTitleAlign: 'center',

          tabBarIcon: () => (
            <Image
              source={require('../../assests/icons/news.png')}
              style={tabStyles.tabBarIcon}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({navigation}) => ({
          headerTitle: 'Saved News',
          headerLeft: () => <DrawerToggleButton navigation={navigation} />,
          headerShown: true,
          tabBarIcon: () => (
            <Image
              source={require('../../assests/icons/saved.png')}
              style={tabStyles.tabBarIcon}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
