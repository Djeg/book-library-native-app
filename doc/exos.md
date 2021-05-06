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