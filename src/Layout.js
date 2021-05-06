import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Layout = ({ children }) => {
  return (
    <View style={styles.layout}>
      <View style={[styles.flexOne, styles.centeredContent]}>{children}</View>
      <View style={[styles.menu, styles.flexOne]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  menu: {
    maxHeight: 60,
    backgroundColor: '#6C715B',
  },
  flexOne: {
    flex: 1
  },
  centeredContent: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})