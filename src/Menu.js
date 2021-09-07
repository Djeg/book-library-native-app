import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'

export default () => (
  <View style={styles.menuContainer}>
    <Link to='/'>
      <Text style={styles.centerText}>Accueil</Text>
    </Link>
    <Link to='/connexion'>
      <Text style={styles.centerText}>Connexion</Text>
    </Link>
    <Link to='/inscription'>
      <Text style={styles.centerText}>Inscription</Text>
    </Link>
  </View>
)

export const styles = StyleSheet.create({
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerText: {
    textAlign: 'center',
  },
})
