import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Welcome } from './src/Welcome'
import { NativeRouter, Route } from 'react-router-native'
import { Layout } from './src/Layout';
import { Hello } from './src/Hello';

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