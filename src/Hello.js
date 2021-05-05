import React, { useState } from 'react'
import { Text, StyleSheet, TextInput, View } from 'react-native';

const majorText = (age) =>
  age >= 18
    ? age >= 50
      ? "Vous êtes un majeur senior !"
      : "Vous êtes majeur"
    : "Vous n'êtes pas majeur"

export const Hello = ({ age, style }) => {
  const [ name, setName ] = useState('Inconnue')
  const majorSentence = majorText(age)

  return (
    <View>
      <Text style={[styleSheet.helloText, style]}>Bonjour {name}, {majorSentence}</Text>
      <TextInput placeholder="Renseigner votre nom" value={name} onChangeText={setName} />
    </View>
  )
}

const styleSheet = StyleSheet.create({
    helloText: {
        paddingTop: 5,
        paddingBottom: 5,
    }
})
