import { createUserWithEmailAndPassword } from '@firebase/auth'
import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { auth } from '../firebase'

export default () => {
  const [emailField, setEmailField] = useState({ value: '', error: '' })
  const [passwordField, setPasswordField] = useState({ value: '', error: '' })
  const [confirmPasswordField, setConfirmPasswordField] = useState({
    value: '',
    error: '',
  })

  // La vérification de l'email
  useEffect(() => {}, [])

  // Actions

  // Action éxécuté lorsque l'on appuie sur le bouton
  // 's'inscrire'
  const onPress = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      console.warn(userCredential)
    } catch (e) {
      addError(e.message)
    }
  }

  return (
    <View>
      <View>
        <Text>Votre email :</Text>
        <TextInput
          value={emailField.value}
          style={styles.textInput}
          onChangeText={value => {
            setEmailField({
              value: value,
              error: '',
            })
          }}
        />
      </View>
      <View>
        <Text>Votre mot de passe :</Text>
        <TextInput
          value={passwordField.value}
          style={styles.textInput}
          onChangeText={value => {
            setPasswordField({
              value: value,
              error: '',
            })
          }}
        />
      </View>
      <View>
        <Text>Confirmation du mot de passe :</Text>
        <TextInput
          value={confirmPasswordField.value}
          style={styles.textInput}
          onChangeText={value => {
            setConfirmPasswordField({
              value: value,
              error: '',
            })
          }}
        />
      </View>
      <View style={styles.button}>
        <Button title="S'inscrire" onPress={onPress} />
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
  error: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
})
