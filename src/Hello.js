import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default ({ name = 'Inconnue', age = 24 }) => {
  return (
    <Text style={styles.title}>
      Coucou {name}, vous avez {age} ans
    </Text>
  )
}

export const styles = StyleSheet.create({
  title: {
    fontSize: '25px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
})
