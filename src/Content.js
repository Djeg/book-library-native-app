import React from 'react'
import { View, StyleSheet } from 'react-native'

export default ({ children }) => {
  return <View style={styles.content}>{children}</View>
}

export const styles = StyleSheet.create({
  content: {
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '15px',
    paddingBottom: '15px',
    backgroundColor: '#adadad',
  },
})
