import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>SuperBook</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  header: {
    paddingTop: '15px',
    paddingBottom: '15px',
    backgroundColor: '#464646',
  },
  title: {
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#adadad',
  },
})
