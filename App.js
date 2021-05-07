import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NativeRouter, Route } from 'react-router-native'
import Layout from './src/Components/Layout';
import Hello from './src/Screens/Hello';
import BookList from './src/Screens/BookList';
import Book from './src/Screens/Book';

export default function App() {
  return (
    <NativeRouter>
      <Layout>
        <Route exact path="/" component={BookList} />
        <Route exact path="/hello" component={Hello} />
        <Route exact path="/book/:id" component={Book} />
      </Layout>
      <StatusBar style="auto" />
    </NativeRouter>
  );
}