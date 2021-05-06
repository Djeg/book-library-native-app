import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Welcome } from './src/Welcome'
import { Layout } from './src/Layout'

export default function App() {
  return (
    <Layout>
      <Welcome />
      <StatusBar style="auto" />
    </Layout>
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