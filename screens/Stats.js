import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView, Image, TouchableOpacity, BackHandler } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';


const DATA = [
    {
        id: 'Primidac',
        title: 'Instagram',
    },
    {
        id: 'Primidc',
        title: 'Instagram',
    },
    {
        id: 'Primiac',
        title: 'Instagram',
    },
    {
        id: 'Pimiac',
        title: 'Instagram',
    },
    {
        id: 'Primic',
        title: 'Instagram',
    },
    {
        id: 'Primac',
        title: 'Instagram',
    },
    {
        id: 'Prmiac',
        title: 'Instagram',
    },
    {
        id: 'Priiac',
        title: 'Instagram',
    },
];


const Stats = ({ navigation }) => {
    const [visible, setVisible] = React.useState(true);
    {

        // // configuring light and dark theme
        const { colors } = useTheme();
        const goHome = () => { navigation.push("Home") }
        // handling backevent
        BackHandler.addEventListener('hardwareBackPress', function () {
            if (!goHome()) {
                goHome();
                return true;
            }
            return false;
        });

        const Item = ({ title, id }) => (
            <View style={styles.item} >
                <MaterialCommunityIcons name="toy-brick-outline" size={30} color="#00a78e" style={{ flexDirection: 'row', position: 'absolute', marginVertical: 18, marginHorizontal: 5 }} />
                <View style={{ marginLeft: Dimensions.get('window').width - 100, }}>
                    <FontAwesome5 name="exchange-alt" size={24} color="#00a78e" style={{ flexDirection: 'row', position: 'absolute', marginVertical: 15, marginHorizontal: 25 }} />
        
                </View>
                <Text style={{ fontFamily: 'Regular', fontSize: 20, marginHorizontal: 40, color: colors.text }}>{title}</Text>
                <Text style={{fontFamily: 'Light', fontSize: 15, marginHorizontal: 40, color: colors.text}}>{id}</Text>
        
            </View>
        );
        const renderItem = ({ item }) => (
            <TouchableOpacity onPress={() => alert("hello" + " " + item.title)}>
                <Item title={item.title} id={item.id} />
            </TouchableOpacity>
        );
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
                <Text style={{ color: colors.primary, fontSize: 18, marginTop: 50, paddingLeft: 18, fontFamily: 'Regular' }}>SafeBrik</Text>
                <Text style={{ color: colors.primary, fontSize: 25, paddingLeft: 18, fontFamily: 'SemiBold' }}>Statistics</Text>
                <View style={[styles.catgories, styles.elevation]}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#153f38', 'transparent']}
                        style={styles.background}
                    />
                    <View style={{ flexDirection: 'row', marginHorizontal: 6, marginTop: 15 }}>
                        <View style={{ flexDirection: 'column', marginHorizontal: 20 }}>
                            <Text style={{ fontFamily: 'SemiBold', fontSize: 40, color: 'white', textAlign: 'center' }}>30</Text>
                            <Text style={{ fontFamily: 'Regular', fontSize: 15, color: '#fff' }}>Total Passwords</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginHorizontal: 40 }}>
                            <Text style={{ fontFamily: 'SemiBold', fontSize: 40, color: 'white', textAlign: 'center' }}>15</Text>
                            <Text style={{ fontFamily: 'Regular', fontSize: 15, color: '#fff' }}>Total Phrases</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 6, marginTop: 15 }}>
                        <View style={{ flexDirection: 'column', marginHorizontal: 45 }}>
                            <Text style={{ fontFamily: 'SemiBold', fontSize: 40, color: 'white', textAlign: 'center' }}>10</Text>
                            <Text style={{ fontFamily: 'Regular', fontSize: 15, color: '#fff' }}>Weak</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginHorizontal: 65 }}>
                            <Text style={{ fontFamily: 'SemiBold', fontSize: 40, color: 'white', textAlign: 'center' }}>5</Text>
                            <Text style={{ fontFamily: 'Regular', fontSize: 15, color: '#fff' }}>Reused</Text>
                        </View>
                    </View>
                </View>

                {/* weak passwords list */}
                <View>
                    <Text style={{ fontFamily: 'Regular', fontSize: 25, color: colors.primary, marginTop: 10, paddingHorizontal: 10 }}>Weak Passwords</Text>
                </View>
                <SafeAreaView style={styles.list} >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}

                    />
                </SafeAreaView>

            </View>


        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 2,
    },
    image: {
        width: 350,
        height: 300,
        resizeMode: 'cover',
        justifyContent: 'center',
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
        height: 200,
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
        fontFamily: 'Light',
        marginHorizontal: 40,
    },
    line: {
        height: 10,
        width: Dimensions.get('window').width,
        backgroundColor: '#ff0000',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 160,
        borderRadius: 15,
    },
})

export default Stats