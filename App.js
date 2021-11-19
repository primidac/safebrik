import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import React from 'react';
import MyStack from './routes/MyStack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';


export default function App() {
  const scheme = useColorScheme();
  const MyDarkTheme = {
    dark: true,
    colors: {
      primary: '#00a78e',
      background: '#1b1c1e',
      text: '#ffffff'
    }
  }
  const MyLightTheme = {
    dark: false,
    colors: {
      primary: '#153f38',
      background: '#fff',
      text: '#153f38'
    }
  }

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme: MyLightTheme  }>
        <MyStack />
      </NavigationContainer>
    </AppearanceProvider>

  );

}

