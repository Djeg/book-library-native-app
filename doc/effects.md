# Les Effets

Dans une interface, les « side effects » représentent tout
ce qui se passe entre l'interface et la machine. En gros tout
ce qui est non visible par l'utilisateur.

Des éxemples d'effets:

- Allez chercher des livres sur une API
- Enregistrer la navigation de l'utilisateur
- Utiliser la camera d'un téléphone
- Utiliser le GPS d'un téléphone
- etc ....

## Utiliser `useEffect`

En react, les effets sont des fonctions. Ces fonctions sont
passé à la fonction `useEffect` afin d'être « controllé »
corréctement par notre composant. Pour schématiser le useEffect,
c'est une fonction qui nous permet de controller **quand est-ce que
notre effet sera éxécuté**.

### Un éxemple, un effet lancer uniquement à l'affichage initial du composant:

```js
import React, { useEffect } from "react";
import { Text } from "react-native";

const BookList = () => {
  useEffect(() => {
    console.log(
      "Je ne m'affiche que quand le composant s'affiche la première fois"
    );
  }, []);

  return <Text>Hello World</Text>;
};

export default BookList;
```

## Controllé les effets

`useEffect` accépte 2 paramètres. Le premier c'est la fonction qui
contient notre effet, le deuxième argument c'est tableau de variable
qui seront observé et au moindre changement l'effet se relancera.

```js
import React, { useEffect } from "react";
import { Text } from "react-native";

const BookList = ({ category }) => {
  // Ici l'effet ne s'éxécutera que lorsque category
  // aura changé de valeur !
  useEffect(() => {
    console.log(
      "Je ne m'affiche que quand le composant s'affiche la première fois"
    );
  }, [category]);

  return <Text>Hello World</Text>;
};

export default BookList;
```

## Un éxemple concret, allez chercher des livres sur une API

```js
import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";

const BookList = () => {
  const [bookList, setBookList] = useState([]);

  // Ici nous créons un effet qui sera éxécuté
  // lorsque le composant vas s'afficher
  useEffect(() => {
    // Nous créons une fonction qui récupére les livres
    // depuis une API
    const fetchBooks = async () => {
      // On éxécute une requête HTTP
      const response = await fetch(
        "https://djeg-book-library-api.herokuapp.com/books"
      );
      // On récupére l'objet JSON contenu dans
      // le réponse HTTP
      const json = await response.json();

      // On met à jour l'état de notre composant avec
      // la liste reçu depuis notre API
      setBookList(json);
    };

    // Nous lançons la fonction de récupération des livres
    fetchBooks();
  }, []);

  return (
    <View>
      <Text>Hello voici la liste des livres de la librairie</Text>
      <Text>
        {bookList.length ? `Il y a ${bookList.length} livres` : "aucun livres"}
      </Text>
      {/* Nous bouclons sur les livres de notre API */}
      {bookList.map((book) => {
        return (
          <View>
            <Text>{book.title}</Text>
            <Image
              source={book.images[0].src}
              style={{ minHeight: 150, width: 100 }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default BookList;
```
