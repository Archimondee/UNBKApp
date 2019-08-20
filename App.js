import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from './src/Routes';
import SoalScreen from './src/Components/Soals/SoalScreen'

export default function App() {
  return (
    <Main/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
