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

const NameText = ({ name }) => {
  if (!name) {
    return <Text>Je ne vous connais pas</Text>
  } else {
    return <Text>Bonjour {name}</Text>
  }
}

const AgeText = ({ age }) => {
  if (!age) {
    return <Text>Renseigner votre age</Text>
  } else if (age < 18) {
    return <Text>Vous avez {age} ans, vous êtes mineur</Text>
  } else {
    return <Text>Vous avez {age} ans, vous êtes majeur</Text>
  }
}