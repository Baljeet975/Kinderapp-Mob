import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Tabs/Home';
import Notifications from './Notifications';

const Tab = createBottomTabNavigator();

function TabsOptions() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Notifications}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="settings" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  export default TabsOptions