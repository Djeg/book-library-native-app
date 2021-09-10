import React from 'react'
import { Text, View } from 'react-native'

const element = (
  <View>
    <Text>Bonjour !</Text>
    <Text>Content de te voir ici.</Text>
  </View>
)

const element = React.createElement(View, {}, [
  React.createElement(Text, {}, ['Bonjour !']),
  React.createElement(Text, {}, ['Content de te voir ici.']),
])
