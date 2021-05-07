import React, { useState } from 'react'
import { Text, StyleSheet, TextInput, View } from 'react-native';

const Hello = ({ age, ...restProps }) => {
  const [name, setName] = useState('')

  return (
    <View style={styleSheet.helloContainer}>
      <HelloText name={name} age={age} {...restProps} style={styleSheet.title} />
      <TextInput placeholder="Renseigner votre nom" value={name} onChangeText={setName} style={styleSheet.input} />
    </View>
  )
}

/*
Step 1

const HelloText = ({ name, age, ...restProps }) => {
  if (!name) {
    return <Text {...restProps}>Je ne vous connais pas</Text>
  }

  return <Text {...restProps}>Bonjour {name}, {majorText(age)}</Text>
}
*/

/*
Step 2

const HelloText = ({ name, age, ...restProps }) =>
  !name
    ? <Text {...restProps}>Je ne vous connais pas</Text>
    : <Text {...restProps}>Bonjour {name}, {majorText(age)}</Text>
*/

const HelloText = ({ name, age, ...restProps }) =>
  <Text {...restProps}>
    {!name ? 'Je ne vous connais pas' : `Bonjour ${name}, ${majorText(age)}`}
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
  },
  helloContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6C715B',
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6C715B',
    padding: 10,
    borderBottomColor: '#EFE6BD',
    borderBottomWidth: 1
  }
})

export default Hello