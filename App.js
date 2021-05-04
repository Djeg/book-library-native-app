import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Hello = ({ name, age }) => {
  if (age >= 18) {
    return <Text>Bonjour {name}, Vous êtes majeur</Text>
  }

  return <Text>Bonjour {name}, Vous n'êtes pas majeur</Text>
}

export default function App() {
  return (
    <View style={styles.container}>
      <Hello name="David" age="30" />
      <Hello name="Pierre" age="12" />
      <Hello name="Paul" age="32" />
      <Hello name="Jack" age="16" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
