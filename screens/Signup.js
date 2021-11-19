import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Image, Pressable, TouchableOpacity, BackHandler } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import signup from '../assets/signup.png';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from '@react-navigation/native';
import Firebase from '../config/Firebase'



const Signup = ({ navigation }) => {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        const { email, password } = this.state;
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(error => console.log(error))
    }
    
    // // configuring light and dark theme
    const { colors } = useTheme();
    const signIn = () => { navigation.push("Signin") }

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
            <Image source={signup} style={styles.image} />
            <Text style={{ color: colors.primary, fontSize: 40, paddingTop: 5, fontFamily: 'SemiBold', marginTop: 10, textAlign: 'center' }}>
                Create Account
            </Text>
            <View style={styles.form}>
                <View style={{ marginTop: 20, }}>
                    <Text style={{
                        color: colors.primary,
                        fontSize: 15,
                        fontFamily: 'SemiBold',
                        marginBottom: 10,
                    }}>
                        Email Address
                    </Text>
                    <Ionicons name="mail-open-outline" size={20} style={{ flexDirection: 'row', position: 'absolute', marginTop: 30, color: colors.primary }} />

                    <TextInput
                        autoCapitalize='none'
                        returnKeyType='next'
                        keyboardType='email-address'
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
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
                        fontFamily: 'SemiBold',
                        marginBottom: 10,
                    }}>
                        Master Password
                    </Text>
                    <Feather name="lock" size={20} style={{ flexDirection: 'row', position: 'absolute', marginTop: 30, color: colors.primary }} />
                    <TextInput
                        secureTextEntry
                        returnKeyType='next'
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
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
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </Pressable>

                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 20 }} onPress={signIn}>
                    <Text style={{ color: colors.text, fontSize: 15, fontFamily: 'Regular' }}>
                        Already a user? <Text style={{ color: colors.primary, fontFamily: 'SemiBold' }}>Sign In</Text>
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
    input: {
        color: '#00a78e',
        fontFamily: 'Regular',
        fontSize: 18,
        borderRadius: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#153f38',
        paddingHorizontal: 25,
        height: 30,
        width: 300,
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


export default Signup