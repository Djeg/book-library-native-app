import React, { useState } from 'react'
import { Text, StyleSheet, TextInput, View } from 'react-native';

const majorText = (age) =>
  age >= 18
    ? age >= 50
      ? "Vous êtes un majeur senior !"
      : "Vous êtes majeur"
    : "Vous n'êtes pas majeur"

const HelloText = ({ name, age }) => {
  if (!name) {
    return <Text>Je ne vous connais pas</Text>
  }

  return <Text>Bonjour {name}, {majorText(age)}</Text>
}

export const Hello = ({ age, style }) => {
  const [ name, setName ] = useState('')

  return (
    <View>
      <HelloText name={name} age={age} />
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
