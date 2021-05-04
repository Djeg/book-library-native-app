# Les feuilles de style (StyleSheet)

En react native, nous utilisons un système très proche.
Ce system c'est celui de feuille de style (StyleSheet).

Éxemple, une feuille de style avec un container rouge:

```js
// Importer StyleSheet depuis react-native
import { StyleSheet } from 'react-native'

// Nous définissons une feuille de style
const styles = StyleSheet.create({
    // Nous pouvons rajouter autant de clefs que l'on veut.
    // Elles agissent un peu comme des class CSS
    container: {
        backgroundColor: 'red',
    },
    foo: {
        paddingTop: '10px',
    },
    bar: {
        paddingBottom: '15px',
    }
})
```

On peut appliquer simplement un style sur élément grâce à la props
`style`:

```js
const Container = ({ children }) => {
    return <View style={styles.container}>{children}</View>
}
```

Nous pouvons aussi spécifier autant de styles que l'on veut
en utilisant un tableau:

```js
const Container = ({ children }) => {
    return <View style={[styles.container, styles.foo, styles.bar]}>{children}</View>
}
```