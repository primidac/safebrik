import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, FlatList, SafeAreaView, TouchableOpacity, StatusBar, BackHandler } from 'react-native';
import AppLoading from 'expo-app-loading';
import { colors, FAB } from 'react-native-elements';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';
import Modal from 'react-native-modal';



const DATA = [
    {
        id: '1',
        title: 'Facebook',
    },
    {
        id: '2',
        title: 'Dribble',
    },
    {
        id: '3',
        title: 'Email',
    },
    {
        id: '4',
        title: 'Github',
    },
    {
        id: '5',
        title: 'Telegram',
    },
    {
        id: '6',
        title: 'Piggyvest',
    },
];


const Phrase = ({ navigation }) => {
    const [visible, setVisible] = React.useState(true);
    {

        // phrase modal
        const [isModalVisible, setModalVisible] = useState(false);

        const toggleModal = () => {
            setModalVisible(!isModalVisible);
        };


        // // configuring light and dark theme
        const { colors } = useTheme();
        const addphraseBtn = () => { navigation.push("AddPhrase") }
        const goHome = () => { navigation.push("Home") }
        // handling backevent
        BackHandler.addEventListener('hardwareBackPress', function () {
            if (!goHome()) {
                goHome();
                return true;
            }
            return false;
        });

        const Item = ({ title }) => (
            <View style={styles.item} >
                <MaterialCommunityIcons name="toy-brick-outline" size={30} color="#00a78e" style={{ flexDirection: 'row', position: 'absolute', marginVertical: 18, marginHorizontal: 5 }} />
                <View style={{ marginLeft: Dimensions.get('window').width - 100, }}>
                    <Ionicons name="copy" size={24} color="#00a78e" style={{ flexDirection: 'row', position: 'absolute', marginVertical: 15, marginHorizontal: 25 }} />

                </View>
                <Text style={{ fontFamily: 'Regular', fontSize: 20, marginHorizontal: 40, color: colors.text }}>{title}</Text>

            </View>
        );

        const renderItem = ({ item }) => (
            <TouchableOpacity onPress={toggleModal} >
                <Item title={item.title} />
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

                {/* modal view */}
                <View>
                    <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} style={{ margin: 0 }}>
                        <View style={{
                            backgroundColor: colors.background,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            height: 150,
                            marginTop: 650,
                            paddingTop: 40,
                        }}>
                            <TouchableOpacity style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
                                <Ionicons name="copy" size={24} color="#00a78e" />
                                <Text style={{ color: colors.primary, fontSize: 20, fontFamily: 'SemiBold', marginLeft: 20 }}>Copy Phrase</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', paddingHorizontal: 30, marginVertical: 20 }}>
                                <MaterialIcons name="update" size={24} color="#00a78e" />
                                <Text style={{ color: colors.primary, fontSize: 20, fontFamily: 'SemiBold', marginLeft: 20 }}>Update Phrase</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
                <Text style={{ color: colors.primary, fontSize: 18, marginTop: 50, paddingLeft: 18, fontFamily: 'Regular' }}>Manage</Text>
                <Text style={{ color: colors.primary, fontSize: 25, paddingLeft: 18, fontFamily: 'SemiBold' }}>Your Phrase</Text>
                <View style={{ justifyContent: 'center' }}>
                    <Ionicons name="ios-search-sharp" size={24} color="grey" style={{ flexDirection: 'row', position: 'absolute', paddingTop: 12, marginLeft: 20 }} />
                    <TextInput
                        autoCapitalize='none'
                        returnKeyType='next'
                        style={styles.input}
                        placeholder='Search'
                        placeholderTextColor='#dcdcdc'
                    />
                </View>
                <View style={[styles.catgories, styles.elevation]}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#153f38', 'transparent']}
                        style={styles.background}
                    />
                    <Text style={{ color: '#fff', fontFamily: 'SemiBold', fontSize: 23, marginVertical: 15, paddingHorizontal: 5 }}>Never share your phrases with anyone</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', fontFamily: 'SemiBold', fontSize: 23, marginVertical: 10, paddingHorizontal: 5 }}>Briked Phrases</Text>
                        <Text style={{ color: '#fff', fontFamily: 'SemiBold', fontSize: 23, marginLeft: 'auto' }}>10<Ionicons name="document-text-outline" size={40} color="#fff" /></Text>
                    </View>
                </View>

                <View>
                    <Text style={{ fontFamily: 'Regular', fontSize: 25, color: colors.primary, marginTop: 10, paddingHorizontal: 10 }}>My Phrases</Text>
                </View>
                <SafeAreaView style={styles.list} >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}

                    />
                </SafeAreaView>

                <FAB
                    visible={visible}
                    onPress={addphraseBtn}
                    placement="right"
                    icon={{ name: 'add', color: 'white' }}
                    color="#00a78e"
                />
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
        color: '#153f38',
        fontWeight: '900',
        fontSize: 18,
        fontFamily: 'Regular',
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
        height: 160,
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
        fontWeight: '500',
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


export default Phrase