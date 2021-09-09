import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { styles as createAccountStyles } from './CreateAccount'
import { auth } from '../firebase'

export default () => {
  // STATE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [sending, setSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // EFFECTS
  //useEffect(() => {
  //  if (sending === false) return

  // setSuccessMessage('')
  // setErrorMessage('')

  //  auth
  //    .signInWithEmailAndPassword(email, password)
  //    .then(userCredential => userCredential.user.email)
  //    .then(email => setSuccessMessage(`Bienvenue ${email} !!`))
  //    .catch(e => setErrorMessage(e.message))
  //    .finally(() => setSending(false))
  //}, [sending])

  useEffect(() => {
    if (sending === false) return

    // On vide le message de success
    setSuccessMessage('')
    // On vide le message d'erreur
    setErrorMessage('')

    const authenticate = async () => {
      try {
        const userCredential = await auth.signInWithEmailAndPassword(
          email,
          password
        )

        setSuccessMessage(`Bienvenue ${userCredential.user.email} :)`)
      } catch (e) {
        setErrorMessage(e.message)
      }

      setSending(false)
    }

    authenticate()
  }, [sending])

  // ACTIONS
  const onPress = () => {
    setSending(true)
  }

  // JSX
  return (
    <View>
      <View>
        <Text>Email :</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={createAccountStyles.textInput}
        />
      </View>
      <View>
        <Text>Mot de passe :</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={createAccountStyles.textInput}
        />
      </View>
      <View>
        {!!successMessage && (
          <Text style={styles.success}>{successMessage}</Text>
        )}
        {!!errorMessage && (
          <Text style={createAccountStyles.error}>{errorMessage}</Text>
        )}
        {sending ? (
          <ActivityIndicator size='large' />
        ) : (
          <Button title='Connexion' onPress={onPress} />
        )}
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  success: {
    textAlign: 'center',
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold',
  },
})
