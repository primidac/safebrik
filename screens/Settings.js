import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions, Switch, Appearance, TouchableOpacity, BackHandler } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Ionicons, Feather, MaterialCommunityIcons, FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useTheme } from '@react-navigation/native';


const Settings = ({ navigation }) => {
    // // configuring light and dark theme
    const { colors } = useTheme();
    const signIn = () => { navigation.push("Signin") }

    const goHome = () => { navigation.push("Home") }
    // handling backevent
    BackHandler.addEventListener('hardwareBackPress', function () {
        if (!goHome()) {
            goHome();
            return true;
        }
        return false;
    });
    {
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
                <Text style={{ color: colors.primary, fontSize: 25, marginTop: 50, paddingLeft: 18, fontFamily: 'SemiBold' }}>Settings</Text>

                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity style={{ paddingHorizontal: 5, marginTop: 10, borderBottomColor: '#d3d3d3', borderBottomWidth: 1, paddingVertical: 8 }}>
                        <Text style={{ fontFamily: 'Regular', color: colors.text, fontSize: 20, marginLeft: 5 }}><Ionicons name="sync-outline" size={30} color="#00a78e" />   Update Master Password</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', paddingHorizontal: 5, marginTop: 10, borderBottomColor: '#d3d3d3', borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ fontFamily: 'SemiBold', color: colors.primary, fontSize: 16, marginLeft: 5 }}>Contact Channels</Text>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: 'Regular', color: colors.text, fontSize: 20, marginTop: 5, marginLeft: 5, marginBottom: 20 }}><Ionicons name="logo-twitter" size={35} color="#00a78e" />   Twitter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: 'Regular', color: colors.text, fontSize: 20, marginLeft: 5, marginBottom: 20 }}><FontAwesome name="telegram" size={35} color="#00a78e" />   Telegram</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: 'Regular', color: colors.text, fontSize: 20, marginLeft: 5, marginBottom: 20 }}><Feather name="instagram" size={35} color="#00a78e" style={{ paddingHorizontal: 15 }} />   Instagram</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ paddingHorizontal: 5, marginTop: 10, borderBottomColor: '#d3d3d3', borderBottomWidth: 1, paddingVertical: 8 }}>
                        <Text style={{ fontFamily: 'Regular', color: colors.text, fontSize: 20, marginLeft: 5 }}><MaterialIcons name="system-update" size={30} color="#00a78e" />   Check For Updates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 5, marginTop: 10, borderBottomColor: '#d3d3d3', borderBottomWidth: 1, paddingVertical: 8 }}>
                        <Text style={{ fontFamily: 'Regular', color: colors.text, fontSize: 20, marginLeft: 5 }}><FontAwesome5 name="donate" size={30} color="#00a78e" />   Support Developer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 5, marginTop: 10, borderBottomColor: '#d3d3d3', borderBottomWidth: 1, paddingVertical: 8 }} onPress={signIn}>
                        <Text style={{ fontFamily: 'Regular', color: colors.text, fontSize: 20, marginLeft: 5 }}><MaterialIcons name="logout" size={30} color="#00a78e" />   Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 5, marginTop: 10, borderBottomColor: '#d3d3d3', borderBottomWidth: 1, paddingVertical: 8 }}>
                        <Text style={{ fontFamily: 'Regular', color: colors.text, fontSize: 20, marginLeft: 5 }}><MaterialCommunityIcons name="toy-brick-outline" size={30} color="#00a78e" />   About</Text>
                    </TouchableOpacity>

                    <Text style={{ fontFamily: 'Bold', textAlign: 'center', color: colors.text, marginVertical: 10 }}>Version: 1.0.0</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 2,
    },
    input: {
        color: '#000',
        fontWeight: '900',
        fontSize: 18,
        borderColor: '#00a78e',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingLeft: 30,
        marginTop: 15,
        marginHorizontal: 15,
        height: 40,
        width: Dimensions.get('window').width - 30,
    },
    catgories: {
        backgroundColor: '#00a78e',
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 15,
        borderRadius: 15,
        height: 150,
        width: Dimensions.get('window').width - 30,
    },
    elevation: {
        elevation: 30,
        shadowColor: 'black',
    },
    list: {
        flex: 1,
    },
    item: {
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 1,
        width: Dimensions.get('window').width,

    },
    title: {
        fontSize: 15,
        fontFamily: 'SemiBold',
        fontWeight: '500',
        marginHorizontal: 40,
    },
    line: {
        height: 10,
        width: Dimensions.get('window').width,
        backgroundColor: '#ff0000',
    },
})

export default Settings