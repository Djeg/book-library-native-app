import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Hello } from './src/Hello'

export default function App() {
  return (
    <View style={styleSheet.container}>
      <Hello age="30" />
      <Hello age="12" />
      <Hello style={styleSheet.red} age="32" />
      <Hello style={styleSheet.bigText} age="16" />
      <Hello age="30" />
      <Hello age="12" />
      <Hello age="32" />
      <Hello age="16" />
      <StatusBar style="auto" />
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
  },
  bigText: {
    fontSize: 20,
  }
});