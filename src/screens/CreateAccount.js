import React, { useState, useEffect } from 'react'
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { auth } from '../firebase'

/**
 * Voici les différente de ce qui se produit lors d'une inscription
 */
const SENDING_STEPS = {
  /**
   * Correspond à l'état initial, pas d'enscription envoyéc
   */
  NONE: 'NONE',

  /**
   * On demande la validation des données
   */
  VALIDATION: 'VALIDATION',

  /**
   * On envoie les données à firebase
   */
  SEND_DATA: 'SEND_DATA',
}

export default () => {
  const [emailField, setEmailField] = useState({ value: '', error: '' })
  const [passwordField, setPasswordField] = useState({ value: '', error: '' })
  const [confirmPasswordField, setConfirmPasswordField] = useState({
    value: '',
    error: '',
  })
  const [formError, setFormError] = useState('')
  const [step, setStep] = useState(SENDING_STEPS.NONE)

  // Effects
  // Première effet, la validation des données
  useEffect(() => {
    // Cette effet se déclenche uniquement lors de la step "VALIDATION"
    if (step !== SENDING_STEPS.VALIDATION) return

    // Validation de l'email
    const validateEmail = () => {
      let valid = true

      if (!emailField.value) {
        setEmailField({
          value: emailField.value,
          error: 'Vous devez renseigner un email',
        })

        valid = false
      }

      if (!/^[^@]+@[^.]+\.[a-zA-Z0-9]+/.test(emailField.value)) {
        setEmailField({
          value: emailField.value,
          error: 'Vous devez renseigner un email valide',
        })

        valid = false
      }

      return valid
    }

    // Validation des mots de passe
    const validatePasswords = () => {
      let valid = true

      if (!passwordField.value) {
        setPasswordField({
          value: passwordField.value,
          error: 'Vous devez renseigner un mot de passe',
        })

        valid = false
      }

      if (!confirmPasswordField.value) {
        setConfirmPasswordField({
          value: confirmPasswordField.value,
          error: 'Vous devez répéter le mot de passe',
        })

        valid = false
      }

      if (passwordField.value !== confirmPasswordField.value) {
        setFormError('Vos deux mots de passe doivent correspondre')

        valid = false
      }

      return valid
    }

    // On vide l'erreur de formulaire
    setFormError('')

    // On Attend 1 seconde
    setTimeout(() => {
      // On valid l'email et le mot de passe
      let validEmail = validateEmail()
      let validPassword = validatePasswords()

      // Si c'est valid on passe à l'étape SEND_DATA
      if (validEmail && validPassword) {
        setStep(SENDING_STEPS.SEND_DATA)
      } else {
        // On retourne à l'étape NONE
        setStep(SENDING_STEPS.NONE)
      }
    }, 1000)
  }, [step])

  // Second effet, l'envoie des données à firebase
  useEffect(() => {
    // On éxécute l'effet uniquement si l'étape est SEND_DATA
    if (step !== SENDING_STEPS.SEND_DATA) return

    const sendToFirebase = async () => {
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(
          emailField.value,
          passwordField.value
        )

        console.warn(userCredential)

        setStep(SENDING_STEPS.NONE)
      } catch (e) {
        setFormError(e.message)

        setStep(SENDING_STEPS.NONE)
      }
    }

    setTimeout(() => {
      sendToFirebase()
    }, 1000)
  }, [step])

  return (
    <View>
      <View>
        <Text>Votre email :</Text>
        {!!emailField.error && (
          <Text style={styles.error}>{emailField.error}</Text>
        )}
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
        {!!passwordField.error && (
          <Text style={styles.error}>{passwordField.error}</Text>
        )}
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
        {!!confirmPasswordField.error && (
          <Text style={styles.error}>{confirmPasswordField.error}</Text>
        )}
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
      {step === SENDING_STEPS.NONE ? (
        <View style={styles.button}>
          {!!formError && <Text style={styles.error}>{formError}</Text>}
          <Button
            title="S'inscrire"
            onPress={() => {
              setStep(SENDING_STEPS.VALIDATION)
            }}
          />
        </View>
      ) : (
        <View>
          <ActivityIndicator size='small' />
          <Text>
            {step === SENDING_STEPS.VALIDATION
              ? 'Validation des données ...'
              : "Envoie des données dans l'espace ..."}
          </Text>
        </View>
      )}
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
