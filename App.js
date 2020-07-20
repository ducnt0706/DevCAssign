import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'


import TabBar from './routes/TabNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <TabBar/>
    </NavigationContainer>
  )
}
