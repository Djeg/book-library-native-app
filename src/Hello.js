import React from 'react'
import { Text, StyleSheet } from 'react-native';

export const Hello = ({ name, age, style }) => {
  if (age >= 18) {
    return <Text style={[styleSheet.helloText, style]}>Bonjour {name}, Vous êtes majeur</Text>
  }

  return <Text style={[styleSheet.helloText, style]}>Bonjour {name}, Vous n'êtes pas majeur</Text>
}

const styleSheet = StyleSheet.create({
    helloText: {
        paddingTop: 5,
        paddingBottom: 5,
    }
})
