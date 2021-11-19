import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View, Pressable, BackHandler } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import secure from '../assets/secure.png';
import brik from '../assets/brik.png';



const Welcome = ({ navigation }) => {

  const signUp = () => { navigation.push("Signup") }
  const signIn = () => { navigation.push("Signin") }

  const goSplash = () => { navigation.push("Welcome") }
        // handling backevent
        BackHandler.addEventListener('hardwareBackPress', function() {
            if (!goSplash()) {
              BackHandler.exitApp()
              return true;
            }
            return false;
          });


  let [fontsLoaded] = useFonts({
    'ExtraLight': require('../assets/fonts/Nunito-ExtraLight.ttf'),
    'Nunito-Light': require('../assets/fonts/Nunito-Light.ttf'),
    'Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    'SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
    'Bold': require('../assets/fonts/Nunito-Bold.ttf'),

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
      <Image source={brik} style={{ paddingTop: 20, marginVertical: 30, height: 60, width: 50 }} />
        <Text style={{ color: '#fff', fontSize: 40, fontFamily: 'Bold', marginTop: 35 }}>
          SafeBrik
        </Text>
      </View>


      <Image source={secure} style={styles.image} />
      <Text style={{ color: '#fff', fontSize: 43, paddingTop: 5, fontFamily: 'Bold', textAlign: 'center', paddingHorizontal: 10 }}>Password Freedom</Text>
      <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Regular', textAlign: 'center', paddingHorizontal: 5 }}>
        Free, safe and secured password manager for everyone. You don't have to remember your passwords anymore.
      </Text>

      <View style={{ flexDirection: 'row', marginTop: 60, }}>
        <Pressable style={styles.buttonl} onPress={signIn}>
          <Text style={styles.buttonTextl}>Login</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={signUp}>
          <Text style={styles.buttonText}>Signup</Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a78e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 25,
    marginHorizontal: 5,
    width: 150,
    height: 40,
  },
  buttonText: {
    color: '#00a78e',
    fontSize: 20,
    fontFamily: 'Bold',
  },
  buttonl: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#fff',
    padding: 24,
    marginHorizontal: 5,
    width: 150,
    height: 40,
  },
  buttonTextl: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Bold',
  },
  image: {
    width: 400,
    height: 290,
    resizeMode: 'cover',
    marginTop:70,
    justifyContent: 'center',

  },
});

export default Welcome