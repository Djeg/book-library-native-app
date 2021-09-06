import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default ({ title, description, price, image }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>Prix : {price} €</Text>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: '100px',
    height: '200px',
  },
})
