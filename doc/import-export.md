# L'import et l'export en js (ES6)

Dans un fichier javascript, par défault tout les membres que l'on déclare
(avec `let`, `var`, `const` ou `function`) sont **privé** !

Il est impossible d'accéder à un membre de ce fichier depuis l'extérieur
de ce fichier.

Afin de rendre **public** un membre d'un fichier, nous utilisons
le mot clefs **export**

## Export 

`export` s'utilise de 2 manière différentes. La première c'est
l'export d'un membre.

Éxemple:

```js
// src/user.js
const age = 30

// Nous exportons la constante age après sa déclaration
export { age }
```

Second éxemple, l'export d'un membre direct

```js
// src/user.js

// Éxactement le même qu'au dessus, cependant
// nous contractons sur une seul ligne
export const age = 30
```

## L'import de membre

Il est possible d'importer un membre depuis un autre fichier grâce au
mot clef `import`:

Éxemple simple:

```js
// src/app.js
// Ici nous importons le membre "age" depuis le fichier
// src/user.js.
// Le chemin dans from est relatif au répertoire du fichier
// en cours.
import { age } from './user'

// ATTENTION! Nous pouvons aussi importer des membres
// depuis des librairies (node_modules).
// Dans le cas d'une librairie, nous ne spécifions aucun
// chemin dans le `from`
import { Text } from 'react-native'

// ATTENTION! Ces imports sont `name sensitive`, on ne peut
// pas les renommé.
// Éxemple: Si je me trompe de nom, l'import ne fonctionnera
// pas:
import { TeXt } from 'react-native' // Ne marche pas :/

// Il est possible d'importer plusieurs membre à la fois.
// Il suffit de les séparer par des virgules:
import { Text, View, TextInput } from 'react-native'

// Il est possible de renommer le membre que l'on importe,
// pour cela on utilise le `as`
import { View as ViewBlock } from 'react-native' // Ici on utilisera ViewBlock plutôt que View
```

Il existe une dernière d'importer des membres que l'on utilise rarement,
c'est l'import **total**:

```js
// Ici on importe TOUT les membres de react-native dans la
// constance ReactNative
import * as ReactNative from 'react-native'

// Pour accéder à un Text:
<ReactNative.Text />

// Lors d'un import total, le nommage est libre
// c'est à dire
import * as PlipPlop from 'react-native'
```

## Les import / export par défault

Les exports par défaut permettent de définir un membre
qui sera importer par défaut.

Éxemple:

```js
// src/user.js

// Ici on exporte 2 constantes (name et age)
export const age = 30
export const name = 'David'

// Ici on exporte par défaut la constance name:
// ATTENTION ! Il n'y a qu'une seul export par défaut dans un
// fichier !!!!
export default name
```

Maintenant que nous avons un export par défaut nous pouvons
définir un *import par défaut*:

```js
// src/app.js

// Ici nous importont le membre exporter par défaut
// depuis le fichier src/user.js.
// Le nommage est libre:
import test from './user'

console.log(test) // "David"
```

## Nous pouvons cumuler les façons:

Éxemple:

```js
// Ici, nous importons le membre par défaut de la librairie
// 'react' que nous nommons 'React'.
// Ensuite, via un virgule, nous importons plusieurs membre
// mais cette fois pas par défaut.
import React, { useState, useEffect } from 'react'

// Nous pouvons via un import total accèder au même membres
import * as R from 'react'

// Pour accéder au membre par défaut de react:
R.default

// Pour accéder à useState:
R.useState
```