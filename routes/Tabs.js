import React from 'react'
import { StyleSheet, View, Text, TextInput, Image, Pressable, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Password from '../screens/Password';
import Phrase from '../screens/Phrase';
import Stats from '../screens/Stats';
import Settings from '../screens/Settings';






const Tab = createBottomTabNavigator();


const Home =  () => {
    return (
        <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Password') {
              iconName = focused
                ? "shield-checkmark"
                : "shield-checkmark-outline"
            } else if (route.name === 'Phrase') {
              iconName = focused ? "document-text"
              : "document-text-outline";
            } else if (route.name === 'Stats') {
              iconName = focused ? "stats-chart"
              : "stats-chart-outline";
            } else if (route.name === 'Settings') {
              iconName = focused ? "cog"
              : "cog-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00a78e',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            borderTopWidth: 0,
            elevation: 0
          }
        })}
        
        >
          <Tab.Screen name="Password" component={Password} options={{ headerShown: false }}/>
          <Tab.Screen name="Phrase" component={Phrase} options={{ headerShown: false }}/>
          <Tab.Screen name="Stats" component={Stats} options={{ headerShown: false }}/>
          <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        </Tab.Navigator>
       
    );
  }

export default Home