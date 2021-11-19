import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Pressable, Image, TouchableOpacity, Appearance } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import add from '../assets/add.png';
import { useTheme } from '@react-navigation/native';


const Add = ({ navigation }) => {
    const [visible, setVisible] = React.useState(true);
    {
        // // configuring light and dark theme
        const { colors } = useTheme();
        const password = () => { navigation.push("Home") }

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
                <View style={{ flexDirection: 'row', marginVertical: 25 }}>
                    <TouchableOpacity onPress={password}>
                        <Feather name="x" size={35} style={{ marginTop: 15, paddingHorizontal: 10, color: colors.primary }} />

                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', marginTop: 15 }}>
                        <Text style={{ color: colors.primary, fontSize: 18, fontFamily: 'Regular' }}>SafeBrik</Text>
                        <Text style={{ color: colors.primary, fontSize: 25, fontFamily: 'SemiBold' }}>Your Passwords</Text>
                    </View>
                </View>
                <Image source={add} style={styles.image} />
                <View style={styles.form}>
                    <View style={{ marginTop: 20, }}>
                        <Text style={{
                            color: colors.primary,
                            fontSize: 15,
                            marginBottom: 10,
                            fontFamily: 'SemiBold',
                        }}>
                            Service
                        </Text>
                        <Ionicons name="globe" size={20} style={{ flexDirection: 'row', position: 'absolute', marginTop: 30, color: colors.primary }} />

                        <TextInput
                            autoCapitalize='none'
                            returnKeyType='next'
                            placeholder='eg. Facebook'
                            placeholderTextColor='#cdcdcd'
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
                            Account Owner
                        </Text>
                        <Feather name="user" size={20} style={{ flexDirection: 'row', position: 'absolute', marginTop: 30, color: colors.primary }} />
                        <TextInput
                            secureTextEntry
                            returnKeyType='next'
                            placeholder='eg. Primidac'
                            placeholderTextColor='#cdcdcd'
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
                            Password
                        </Text>
                        <Feather name="lock" size={20} style={{ flexDirection: 'row', position: 'absolute', marginTop: 30, color: colors.primary }} />
                        <TextInput
                            secureTextEntry
                            returnKeyType='next'
                            placeholder='Hint: Not less than 6 chars'
                            placeholderTextColor='#cdcdcd'
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

                    <Pressable style={styles.button} onPress={() => alert("Password or Phrase Saved")}>
                        <Text style={styles.buttonText}>SafeBrik</Text>
                    </Pressable>

                </View>
            </KeyboardAwareScrollView>
        )
    }
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

export default Add