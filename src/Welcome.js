import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

export const Welcome = () => {
  // Création des états (le nom, et l'age)
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  let helloText = null
  let ageText = null

  if (!name) {
    helloText = <Text>Je ne vous connais pas</Text>
  } else {
    helloText = <Text>Bonjour {name}</Text>
  }

  if (!age) {
    ageText = <Text>Renseigner votre age</Text>
  } else if (age < 18) {
    ageText = <Text>Vous avez {age} ans, vous êtes mineur</Text>
  } else {
    ageText = <Text>Vous avez {age} ans, vous êtes majeur</Text>
  }

  return (
    <View>
      <TextInput placeholder="Votre nom" value={name} onChangeText={setName} />
      <TextInput placeholder="Votre age" value={age} onChangeText={setAge} />
      {helloText}
      {ageText}
    </View>
  )
}