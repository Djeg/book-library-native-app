# La navigation

Avant de pouvoir naviguer parmis différents
écran, nous avons besoin d'installer certaines dépendances.

Pour cela les instruction sont [ici](https://reactnavigation.org/docs/getting-started).

## Mettre en place la navigation

Afin de mettre la navigation sur une application react native,
nous avons 4 prérequis:

1. Englober notre application dans un `NavigationContainer` (permet de se connécter
à l'historique de notre téléphone)
2. Une `Stack` (permet de configurer comment la navigation doit s'éfféctuer, les animations
, l'affichage du menu de navigation etc ....)
3. Englober tout nos écran dans un `Stack.Navigator`
4. Afficher nos écrans grâce à `Stack.Screen`

Éxemple:

```js
// App.js

// Ne pas oublier d'imposter 'react-native-gesture-handler'
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Nous créons une stack qui nous permettra de
// se déplacer d'écran en écran
//  (cf: https://reactnavigation.org/docs/stack-navigator/)
const Stack = createStackNavigator();

// Nous créons nos composants d'écran
const Screen1 = () => <Text>Voici screen 1</Text>
const Screen2 = () => <Text>Voici screen 2</Text>

export default function App() {
  // Nous mettons toutes la navigation en place !
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
```

## Comment naviguer entre les écrans ?

Afin de naviguer entre les écrans, react navigation met à disposition
un *hook* (une fonction) `useNavigation` qui nous retourne un objet de navigation
(cf: https://reactnavigation.org/docs/navigating#navigating-to-a-new-screen)

Sur cet objet de navigation nous pouvons appeler la fonction `navigate`.

Éxemple: appuyer sur un bouton pour naviguer sur un écran:

```js
import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

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
```