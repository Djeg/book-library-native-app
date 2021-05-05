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
    // la chaine de caractère "Inconnue' lorsque le component
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
avec lequel nous pouvons interargir:

```js
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

export const Hello = () => {
    const [name, setName] = useState('Inconnue')

    return (
        <View>
            <Text>Bonjour {name}</Text>
            {/*
                On utilise un TextInput (react-native) afin de pouvoir
                mettre à jour notre state `name`. La props "onChangeText"
                nous permet de récupérer le text entré par l'utilisateur :).
                Il faut utiliser `setName` afin de mettre à jour notre state.
                La props `value` nous permet d'attacher notre `name` à cette input.
            */}
            <TextInput placeholder="Placez votre nom ici !" value={name} onChangeText={(text) => { setName(text) }} />
        </View>
    )
}
```