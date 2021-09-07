import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

export default () => {
  // STATE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // ACTIONS
  const onPress = () => {
    console.log(email, password)
  }

  // JSX
  return (
    <View>
      <View>
        <Text>Email :</Text>
        <TextInput value={email} onChangeText={setEmail} />
      </View>
      <View>
        <Text>Mot de passe :</Text>
        <TextInput value={password} onChangeText={setPassword} />
      </View>
      <View>
        <Button title='Connexion' onPress={onPress} />
      </View>
    </View>
  )
}
