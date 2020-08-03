import React from 'react';
import {SafeAreaView} from 'react-native';

import {globalStyles} from './app/styles/style';
import Home from './app/containers/Home';

export default function App() {
  return (
    <SafeAreaView style={globalStyles.containerBody}>
      <Home/>
    </SafeAreaView>
  );
}
