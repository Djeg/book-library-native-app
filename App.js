import React from 'react'
import { View, StyleSheet } from 'react-native'
import BookList from './src/screens/BookList'
import Content from './src/Content'
import CreateAccount from './src/screens/CreateAccount'
import Header from './src/Header'
import Login from './src/screens/Login'
import { NativeRouter, Route } from 'react-router-native'
import Menu from './src/Menu'

export default function App() {
  return (
    <NativeRouter>
      <View>
        <Header />
        <Menu />
        <Content>
          <Route exact path='/' component={BookList} />
          <Route exact path='/connexion'>
            <Login onConnexion={() => console.log('coucou')} />
          </Route>
          <Route exact path='/inscription' component={CreateAccount} />
        </Content>
      </View>
    </NativeRouter>
  )
}

/**
 * Généralement le style css de nos composant
 * se situe à la fin du fichier
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
})
