import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default () => {
  const [email, setEmail] = useState('coucou@mail.com')
  const [password, setPassword] = useState('pass')
  const [confirmPassword, setConfirmPassword] = useState('pass')

  // g x => 1 + x
  // f x => g(x)
  // f === g

  // const log = (x) => console.log(x)
  // log === console.log
  // const log = console.log

  return (
    <View>
      <View>
        <Text>Votre email :</Text>
        <TextInput
          value={email}
          style={styles.textInput}
          onChangeText={setEmail}
        />
      </View>
      <View>
        <Text>Votre mot de passe :</Text>
        <TextInput
          value={password}
          style={styles.textInput}
          onChangeText={setPassword}
        />
      </View>
      <View>
        <Text>Confirmation du mot de passe :</Text>
        <TextInput
          value={confirmPassword}
          style={styles.textInput}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="S'inscrire"
          onPress={() => {
            console.log(email, password, confirmPassword)
          }}
        />
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    margin: 5,
    padding: 15,
  },
  button: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    display: 'block',
    marginTop: 8,
    marginBottom: 10,
  },
})
