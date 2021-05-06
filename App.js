import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const Screen1 = () => {
  // Nous récupérons notre objet de navigation depuis `@react-navigation/native`:
  const navigation = useNavigation()

  return (
    <View>
      <Text>Voici screen 1</Text>
      {/* Nous navigons sur l'écran n° 2 (Screen2) lorque l'on presse le bouton */}
      <Button title="Go to screen 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  )
}
const Screen2 = () => <Text>Voici screen 2</Text>

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}