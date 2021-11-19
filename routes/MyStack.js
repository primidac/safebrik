import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';
import Home from './Tabs';
import Add from '../screens/Add';
import Phrase from '../screens/Phrase';
import AddPhrase from '../screens/AddPhrase';
import React from 'react';


const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Phrase" component={Phrase} options={{ headerShown: false }} />
            <Stack.Screen name="Add" component={Add} options={{ headerShown: false }} />
            <Stack.Screen name="AddPhrase" component={AddPhrase} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


export default MyStack