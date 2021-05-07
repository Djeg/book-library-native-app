import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Link } from 'react-router-native'

const Layout = ({ children }) => {
  return (
    <View style={styles.layout}>
      <View style={[styles.flexOne, styles.centeredContent]}>{children}</View>
      <View style={[styles.menu, styles.flexOne]}>
        <Link to="/" style={styles.menuItem}>
          <Text>Welcome</Text>
        </Link>
        <Link to="/hello"style={styles.menuItem}>
          <Text>Hello</Text>
        </Link>
      </View>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  menuItem: {
    padding: 10,
    borderColor: '#F5F5F5',
    borderWidth: 1
  },
  flexOne: {
    flex: 1
  },
  centeredContent: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Layout