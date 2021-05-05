# Le state en React

Un état (state) c'est une donée qui change en fonction
de ce que fais l'utilisateur de votre interface.

## Comment utiliser un « State »

Afin de déclarer un state, il faut utiliser une fonction
react `useState`:

Éxemple, un état pour le prénom d'un utilisateur

```js
import React, { useState } from 'react'
import { Text } from 'react-native'

export const Hello = () => {
    // Ici on déclare un state "name" qui vaut
    // une chaine de caractère vide lorsque le component
    // s'affiche la première fois
    const [name, setName] = useState('Inconnue')

    // On affiche notre state "name"
    return (
        <Text>Bonjour {name}</Text>
    )
}
```

Un state peut-être modifié en utilisant sa fonction de modification
(setName plus haut). Pour cela, nous avons besoin d'un composant
avec laquel nous pouvons interargir:

```js
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

export const Hello = () => {
    // Ici on déclare un state "name" qui vaut
    // une chaine de caractère vide lorsque le component
    // s'affiche la première fois
    const [name, setName] = useState('Inconnue')

    // On affiche notre state "name"
    return (
        <View>
            <Text>Bonjour {name}</Text>
            <TextInput placeholder="Placez votre nom ici !" onChangeText={(text) => { setName(text) }} />
        </View>
    )
}
```