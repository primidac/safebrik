import React from 'react'
import { StyleSheet, View, Text, TextInput, Image, Pressable, TouchableOpacity, BackHandler } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import signin from '../assets/signin.png';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from '@react-navigation/native';



const Signin = ({ navigation }) => {
    // // configuring light and dark theme
    const { colors } = useTheme();
    const signUp = () => { navigation.push("Signup") }
    const home = () => { navigation.push("Home") }
    const goSplash = () => { navigation.push("Welcome") }
    // handling backevent
    BackHandler.addEventListener('hardwareBackPress', function () {
        if (!goSplash()) {
            goSplash();
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
        <KeyboardAwareScrollView
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
        >
            <Image source={signin} style={styles.image} />
            <Text style={{ color: colors.primary, fontSize: 40, paddingTop: 5, fontFamily: 'SemiBold', marginTop: 10, textAlign: 'center' }}>
                Welcome Back
            </Text>
            <View style={styles.form}>
                <View style={{ marginTop: 20, }}>
                    <Text style={{
                        color: colors.primary,
                        fontSize: 15,
                        marginBottom: 10,
                        fontFamily: 'SemiBold',
                    }}>
                        Email Address
                    </Text>
                    <Ionicons name="mail-open-outline" size={20} style={{ flexDirection: 'row', position: 'absolute', marginTop: 30, color: colors.primary }} />

                    <TextInput
                        autoCapitalize='none'
                        returnKeyType='next'
                        keyboardType='email-address'
                        style={{
                            color: colors.primary,
                            fontFamily: 'Regular',
                            fontSize: 18,
                            borderRadius: 4,
                            borderBottomWidth: 1,
                            borderBottomColor: '#153f38',
                            paddingHorizontal: 25,
                            height: 30,
                            width: 300,
                        }}
                    />

                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={{
                        color: colors.primary,
                        fontSize: 15,
                        marginBottom: 10,
                        fontFamily: 'SemiBold',
                    }}>
                        Master Password
                    </Text>
                    <Feather name="lock" size={20} style={{ flexDirection: 'row', position: 'absolute', marginTop: 30, color: colors.primary }} />
                    <TextInput
                        secureTextEntry
                        returnKeyType='next'
                        style={{
                            color: colors.primary,
                            fontFamily: 'Regular',
                            fontSize: 18,
                            borderRadius: 4,
                            borderBottomWidth: 1,
                            borderBottomColor: '#153f38',
                            paddingHorizontal: 25,
                            height: 30,
                            width: 300,
                        }}
                    />
                </View>

                <Pressable style={styles.button} onPress={home}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>

                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }} onPress={signUp}>
                    <Text style={{ color: colors.text, fontSize: 15, fontFamily: 'Regular' }}>
                        Don't have an account? <Text style={{ color: colors.primary, fontFamily: 'SemiBold' }}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>


        </KeyboardAwareScrollView>



    )
}

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 300,
        marginTop: 20,
        resizeMode: 'cover',
        paddingBottom: 10,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#00a78e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 25,
        marginTop: 30,
        marginBottom: 10,
        width: 300,
        height: 40,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Bold',

    },
    form: {
        marginBottom: 30,
        marginHorizontal: 30,
    },

})


export default Signin