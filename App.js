import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Hello } from './src/Hello'

export default function App() {
  return (
    <View style={styleSheet.container}>
      <Hello name="David" age="30" />
      <Hello name="Pierre" age="12" />
      <Hello style={styleSheet.red} name="Paul" age="32" />
      <Hello style={styleSheet.bigText} name="Jack" age="16" />
      <Hello name="David" age="30" />
      <Hello name="Pierre" age="12" />
      <Hello name="Paul" age="32" />
      <Hello name="Jack" age="16" />
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
    fontSize: '20px',
  }
});