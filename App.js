import React from 'react'
import { View, StyleSheet } from 'react-native'
import BookList from './src/BookList'
import Content from './src/Content'
import CreateAccount from './src/CreateAccount'
import Header from './src/Header'
import Hello from './src/Hello'
import YellowText from './src/YellowText'

export default function App() {
  return (
    <View>
      <Header />
      <Content>
        <CreateAccount />
        <BookList />
        <Hello />
        <YellowText>Coucou les amis</YellowText>
      </Content>
    </View>
  )
}

/**
 * Généralement le style css de nos composant
 * se situe à la fin du fichier
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: '15px',
  },
  title: {
    color: 'white',
    fontSize: '20px',
  },
})
