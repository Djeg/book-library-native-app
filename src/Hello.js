import React, { useState } from 'react'
import { Text, StyleSheet, TextInput, View } from 'react-native';

export const Hello = ({ age, ...restProps }) => {
  const [ name, setName ] = useState('')

  return (
    <View>
      <HelloText name={name} age={age} {...restProps} />
      <TextInput placeholder="Renseigner votre nom" value={name} onChangeText={setName} />
    </View>
  )
}

/*
const HelloText = ({ name, age, ...restProps }) => {
  if (!name) {
    return <Text {...restProps}>Je ne vous connais pas</Text>
  }

  return <Text {...restProps}>Bonjour {name}, {majorText(age)}</Text>
}
*/

/*
const HelloText = ({ name, age, ...restProps }) =>
  !name
    ? <Text {...restProps}>Je ne vous connais pas</Text>
    : <Text {...restProps}>Bonjour {name}, {majorText(age)}</Text>
*/

const HelloText = ({ name, age, ...restProps }) =>
  <Text {...restProps}>
    { !name ? 'Je ne vous connais pas' : `Bonjour ${name}, ${majorText(age)}` }
  </Text>

const majorText = (age) =>
  age >= 18
    ? age >= 50
      ? "Vous êtes un majeur senior !"
      : "Vous êtes majeur"
    : "Vous n'êtes pas majeur"

const styleSheet = StyleSheet.create({
    helloText: {
        paddingTop: 5,
        paddingBottom: 5,
    }
})
