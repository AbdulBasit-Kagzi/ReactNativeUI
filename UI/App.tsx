import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import like from './assets/images/heart.png';
import profile from './assets/images/account.png';

import Home from './pages/Home';
import Like from './pages/Like';
import Profile from './pages/Profile';
import {colors} from './assets/colors/colors';
import Details from './pages/Details';
import Login from './pages/Login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Like" component={like} />
//       <Drawer.Screen name="Profile" component={Profile} />
//     </Drawer.Navigator>
//   );
// }

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Image source={like} />,
        }}
      />
      <Tab.Screen
        name="Like"
        component={Like}
        options={{
          tabBarIcon: () => <Image source={like} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Image source={profile} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Tab Navigator" component={TabNavigation} />
        {/* <Stack.Screen name="Drawer Navigation" component={MyDrawer} /> */}
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
