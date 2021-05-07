import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Welcome from './src/Screens/Welcome'
import { NativeRouter, Route } from 'react-router-native'
import Layout from './src/Components/Layout';
import Hello from './src/Screens/Hello';

export default function App() {
  return (
    <NativeRouter>
      <Layout>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/hello" component={Hello} />
      </Layout>
      <StatusBar style="auto" />
    </NativeRouter>
  );
}