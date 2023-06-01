import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Icon from 'react-native-vector-icons/Ionicons';
import MenuItems from "./MenuItems";
import Notifications from '../../components/Notifications';
import Messages from '../../components/Messages/Messages';




const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home-outline" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Messages" component={Messages} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="chatbubble-ellipses-outline" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Notifications" component={Notifications} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="notifications-outline" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Menu" component={MenuItems} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="menu-outline" size={size} color={color} />
        ),
      }} />

    </Tab.Navigator>
  )
}

export default Tabs;