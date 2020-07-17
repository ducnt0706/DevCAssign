import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Header from '../components/Header'

const Stack=createStackNavigator();

export default function TabNavigation() {
    // const customTab=({route})=>(
    //     {tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;

    //         if (route.name === 'Home') {
    //           iconName ='ios-home'
    //         } else if (route.name === 'Detail') {
    //           iconName = focused ? 'ios-list-box' : 'ios-list';
    //         }
    //         return <Ionicons name={iconName} size={size} color={color}/>
    //     }}
    // )
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerTitle:()=><Header title='Rock Paper Scissors Game'/>}}/>
            <Stack.Screen name="Detail" component={Detail} options={{headerTitle:()=><Header title='Information of Game'/>}}/>
        </Stack.Navigator>
    )
}
