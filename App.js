import React from 'react'
import { View, StyleSheet } from 'react-native'
import Content from './src/Content'
import Header from './src/Header'
import Hello from './src/Hello'
import YellowText from './src/YellowText'
import BookThumbnail from './src/BookThumbnail'

export default function App() {
  return (
    <View>
      <Header />
      <Content>
        <BookThumbnail
          title='Harry Potter'
          description='Harry Potter'
          price={21.0}
          image='https://static.dezeen.com/uploads/2021/04/harry-potter-michele-de-lucchi-covers_dezeen_2364_col_21-852x1261.jpg'
        />
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
