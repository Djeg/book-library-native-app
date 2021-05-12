# Exercice 1

Afficher 5 balises « Text » avec du lorem ipsum
dans le fichier `App.js`.

# Exercice 2

Importer "ScrollView" depuis react-native. Remplacer
la balise (component) View par ScrollView.

# Exercice 3

Créer un component "Hello" qui affiche un texte de bienvenue.
Utiliser ce component dans notre component "App".

Tout ceci dans le fichier App.js

# Exercice 4

Retoucher le component "Hello" afin qu'il puisse recevoir
2 props "name" et "age".

Si age > 18, le component devras afficher "Bonjour {name}, vous êtes majeur"
Sinon "Bonjour {name}, Vous êtes mineur"

Utiliser ce component dans le component App.

# Exercice 5

Mettre dans le fichier "src/Hello.js" la composant "Hello" présent
dans le fichier "App.js"

Importer le composant "src/Hello.js" depuis "App.js" afin de l'afficher

NOTE: Vous pouvez réfléchir à une solution concernant le style ?

# Exercice 6

Dans `src/Hello.js`, enlever la props `name` et créer un state avec
`useState`.

Retoucher le JSX de `src/Hello.js` pour retourner un component `Text` et
un component `TextInput`. Lorsque l'utilisateur change le text de l'input
le name doit changé aussi.

# Exercice 7

Créer dans le fichier `src/Hello.js` un component `HelloText`. Ce composant
accèpte 2 props (`name` et `age`).

Si name est vide, le composant affiche un text "Je ne vous connais pas"
Si name n'est pas vide, le composant affiche un text "Bonjour {name}, {majorText(age)}"

Afficher `HelloText` dans le component `Hello`.

## Exercice 8

1. Créer un fichier `src/Welcome.js`
2. Créer un composant `Welcome` qui retourne une View avec:

- Créer un state "name" (pour le nom de la personne)
- Créer un state "age" (pour l'age de la personne)
- Un TextInput pour la nom d'une personne
- Un TextInput pour l'age de la personne
- Un Text pour afficher le nom de la personne (si aucun nom, afficher "Je ne vous connais pas", sinon afficher "Bonjour {name}")
- Un Text pour afficher l'age de la personne (si aucun age, afficher "Rentrer votre age", si age < 18 afficher "Vous avez {age}, vous êtes mineur", si l'age est supèrieur à 18 afficher "Vous avez {age}, vous êtes majeur").

3. Dans le fichier `App.js` Afficher le composant `Welcome`

### Solution 1:

```js
// src/Welcome.js
import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

export const Welcome = () => {
  // Création des états (le nom, et l'age)
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  let helloText = null;
  let ageText = null;

  if (!name) {
    helloText = <Text>Je ne vous connais pas</Text>;
  } else {
    helloText = <Text>Bonjour {name}</Text>;
  }

  if (!age) {
    ageText = <Text>Renseigner votre age</Text>;
  } else if (age < 18) {
    ageText = <Text>Vous avez {age} ans, vous êtes mineur</Text>;
  } else {
    ageText = <Text>Vous avez {age} ans, vous êtes majeur</Text>;
  }

  return (
    <View>
      <TextInput placeholder="Votre nom" value={name} onChangeText={setName} />
      <TextInput placeholder="Votre age" value={age} onChangeText={setAge} />
      {helloText}
      {ageText}
    </View>
  );
};
```

### Solution 2

```js
import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

export const Welcome = () => {
  // Création des états (le nom, et l'age)
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <View>
      <TextInput placeholder="Votre nom" value={name} onChangeText={setName} />
      <TextInput placeholder="Votre age" value={age} onChangeText={setAge} />
      <NameText name={name} />
      <AgeText age={age} />
    </View>
  );
};

const NameText = ({ name }) => {
  if (!name) {
    return <Text>Je ne vous connais pas</Text>;
  } else {
    return <Text>Bonjour {name}</Text>;
  }
};

const AgeText = ({ age }) => {
  if (!age) {
    return <Text>Renseigner votre age</Text>;
  } else if (age < 18) {
    return <Text>Vous avez {age} ans, vous êtes mineur</Text>;
  } else {
    return <Text>Vous avez {age} ans, vous êtes majeur</Text>;
  }
};
```

### Solution 3

```js
import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

export const Welcome = () => {
  // Création des états (le nom, et l'age)
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <View>
      <TextInput placeholder="Votre nom" value={name} onChangeText={setName} />
      <TextInput placeholder="Votre age" value={age} onChangeText={setAge} />
      <NameText name={name} />
      <AgeText age={age} />
    </View>
  );
};

const NameText = ({ name }) =>
  name ? <Text>Bonjour {name}</Text> : <Text>Je ne vous connais pas</Text>;

const AgeText = ({ age }) => {
  if (!age) {
    return <Text>Renseigner votre age</Text>;
  }

  if (age < 18) {
    return <Text>Vous avez {age} ans, vous êtes mineur</Text>;
  }

  return <Text>Vous avez {age} ans, vous êtes majeur</Text>;
};
```

### Solution 4

```js
import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

export const Welcome = () => {
  // Création des états (le nom, et l'age)
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <View>
      <TextInput placeholder="Votre nom" value={name} onChangeText={setName} />
      <TextInput placeholder="Votre age" value={age} onChangeText={setAge} />
      <NameText name={name} />
      <AgeText age={age} />
    </View>
  );
};

const NameText = ({ name }) =>
  name ? <Text>Bonjour {name}</Text> : <Text>Je ne vous connais pas</Text>;

const AgeText = ({ age }) =>
  !age ? (
    <Text>Renseigner votre age</Text>
  ) : age < 18 ? (
    <Text>Vous avez {age} ans, vous êtes mineur</Text>
  ) : (
    <Text>Vous avez {age} ans, vous êtes majeur</Text>
  );
```

# Exercice 9

1. Créer un composant `BookList` dans `src/BookList.js`
2. Créer un état `bookList` qui contiendra la liste des livres
3. Créer un effet qui ira chercher les livres depuis l'api (https://djeg-book-library-api.herokuapp.com/books)
4. Uns fois les livres recu, mettre à jour l'état `bookList` de notre composant
5. Afficher la liste des livres en utilisant des composant `View` et `Text`
6. Afficher le composant `BookList` dans `App.js`

# Exercice GIT

- Créer un répertoire "MonProjet" sur votre bureau
- Initialiser un « repository » git dans ce répertoire
- Créé un fichier README.md dans ce répertoire
- On suis le fichier via git
- On commit le fichier avec le message "Création de README.md"

# Exercice GIT 2

- Retoucher le fichier README.md (avec VSCODE) en ajoutant "bonjour"
- On suis le fichier via git
- On commit le fichier avec le message "Ajout de bonjour dans README.md"
