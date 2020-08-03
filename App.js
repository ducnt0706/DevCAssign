import React from 'react';
import {SafeAreaView} from 'react-native';

import {globalStyles} from './app/styles/style';
//import Home from './app/containers/Home';
import Test from './app/containers/Test';

export default function App() {
  return (
    <SafeAreaView style={globalStyles.containerBody}>
      <Test/>
    </SafeAreaView>
  );
}
