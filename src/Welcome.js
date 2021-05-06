import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

export const Welcome = () => {
  // Création des états (le nom, et l'age)
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  return (
    <View>
      <TextInput placeholder="Votre nom" value={name} onChangeText={setName} />
      <TextInput placeholder="Votre age" value={age} onChangeText={setAge} />
      <NameText name={name} />
      <AgeText age={age} />
    </View>
  )
}

const NameText = ({ name }) =>
  name ? <Text>Bonjour {name}</Text> : <Text>Je ne vous connais pas</Text>

const AgeText = ({ age }) => {
  if (!age) {
    return <Text>Renseigner votre age</Text>
  }

  if (age < 18) {
    return <Text>Vous avez {age} ans, vous êtes mineur</Text>
  }

  return <Text>Vous avez {age} ans, vous êtes majeur</Text>
}