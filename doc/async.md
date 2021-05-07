# L'asynchrone en Javascript

Javascript est un language dont le concept même repose
sur "L'asynchronité". C'est la possibilité de pouvoir
éxécuter plusieur fonctions **en même temps** !

## La `Promise`

En javascript, une fonction asynchrone ne retourne
pas son résultat (puisque la fonction s'éxécute en même
temp que le code), mais retourne une `Promise`.

La `Promise` est un objet javascript qui nous permet
de gérer les fonctions asynchrone (cf [mozilla doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise))

Un éxemple avec la fonction `fetch` :

```js
// Ici on récupére la `Promise` de la fonction fetch:
const promise = fetch("google.fr");

// Maintenant que nous avons la promise, nous pouvons
// lui attaché une fonction qui s'éxécutera à la fin
// de la requête:
promise.then((response) => {
  console.log(response); // Affiche la réponse du server google.fr
});
```

## Les fonctions asynchrone

Les fonctions asynchrone permettent d'éxécuter du code
en parralel d'autre code.

Afin de créer une fonction asynchrone, il suffit d'utiliser
le mot clefs `async`.

Une fonction `async` permet l'utilisation do mot
clef `await` afin d'attendre la fin d'une autre fonction
`async`.

Éxemple, aller chercher des livres sur une api:

```js
// Nous créons la fonction asynchrone
const fetchBook = async () => {
  const response = await fetch(
    "https://djeg-book-library-api.herokuapp.com/books"
  );
  const bookList = await response.json();

  setBookList(bookList);
};

// Ici la même version mais sans `async`
const fetchBook = () => {
  const promise = fetch("https://djeg-book-library-api.herokuapp.com/books");

  promise
    .then((response) => response.json())
    .then((bookList) => setBookList(bookList));
};
```
