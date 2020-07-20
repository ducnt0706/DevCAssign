import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'ToDo App',headerTitleAlign:'center',headerTitleStyle:{fontSize:25,color:'white'},headerStyle:{backgroundColor:'coral'}}}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
