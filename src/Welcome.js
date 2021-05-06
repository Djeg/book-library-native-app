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
  name
    ? <Text>Bonjour {name}</Text>
    : <Text>Je ne vous connais pas</Text>

const AgeText = ({ age }) =>
  !age
    ? <Text>Renseigner votre age</Text>
    : age < 18
      ? <Text>Vous avez {age} ans, vous êtes mineur</Text>
      : <Text>Vous avez {age} ans, vous êtes majeur</Text>