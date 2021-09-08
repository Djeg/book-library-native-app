import { createUserWithEmailAndPassword } from '@firebase/auth'
import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { auth } from '../firebase'

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState([])

  // Helper Functions
  const addError = errorMessage => {
    // Si l'erreur existe dèja je ne fais rien
    if (errors.includes(errorMessage)) {
      return
    }

    // Sinon, je rajoute le message d'erreur
    // dans mon tableaux d'erreur
    setErrors([...errors, errorMessage])
  }

  const removeError = errorMessage => {
    // Si l'erreur n'existe pas on ne fais rien
    if (!errors.includes(errorMessage)) {
      return
    }

    // Sinon, supprimer le message d'erreur
    setErrors(errors.filter(e => e !== errorMessage))
  }

  // Side Effect
  //const [emailError, setEmailError] = useState(false)
  //useEffect(() => {
  //  if (!email) {
  //    setEmailError(false)
  //  } else if (/^[^ @]+@[^ @]+\.[a-zA-Z0-9]+$/.test(email)) {
  //    setEmailError(false)
  //  } else {
  //    setEmailError(true)
  //  }
  //}, [email])

  // La vérification de l'email
  useEffect(() => {
    // Le message d'erreur
    const message = 'Invalide email'

    // Si je n'ai pas d'email ou que l'email est valide,
    // je supprime l'erreur et arréte la fonction
    if (!email || /^[^ @]+@[^ @]+\.[a-zA-Z0-9]+$/.test(email)) {
      removeError(message)

      return
    }

    // Sinon, j'ajoute l'erreur
    addError(message)
  }, [email])

  // Actions

  // Action éxécuté lorsque l'on appuie sur le bouton
  // 's'inscrire'
  const onPress = async () => {
    const noPasswordMessage =
      'Vous devez spécifier un mot de passe et le confirmer'
    const noIdenticPasswordMessage =
      'Vos deux mots de passe doivent être les même'

    // Vérifier les mots de passe vide
    if (!password || !confirmPassword) {
      addError(noPasswordMessage)
    } else {
      removeError(noPasswordMessage)
    }

    // Vérification de l'identité des mots de passe
    if (password && confirmPassword && password !== confirmPassword) {
      addError(noIdenticPasswordMessage)
    } else {
      removeError(noIdenticPasswordMessage)
    }

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
      <View>
        {errors.map(error => (
          <Text style={styles.error}>{error}</Text>
        ))}
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
