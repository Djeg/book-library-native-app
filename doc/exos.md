# Exercice

## Exo 1 - Ajout d'un header

1. Créer un composant "Header"
2. Dans ce composant, afficher le titre de l'application centré (par exemple: SuperBook)
3. Ajouter du style selon votre gout
4. Retoucher le App.js afin d'afficher le
   Header

## Exo 2 - Le contenue

1. Créer un composant "Content"
2. Ce composant contient **tout** les enfants
   du contenue
3. Ajouter un peu de style selon votre gout
4. Retoucher le App.js afin d'afficher le
   Contenue

## Exo 3 - Une vignette

1. Créer un composant "BookThumbnail"
2. Afficher, grace au props, un nom de livre,
   un description d'un livre, un prix,
   et une image
3. Ajouter du style selon votre gout

## Exo 4 - La liste des livres

1. Créer un composant "BookList"
2. Grace au composant "BookThumbnail", afficher au moins 3 livres de votre choix.
3. Ajouter du style selon votre gout
4. Ajouter le composant "BookList" dans
   let fichier "App.js"

## Exo 5 - La connexion

1. Créer un composant "Login"
2. Dans ce composant afficher 2 text input: 'email' et 'mot de passe'
3. Afficher aussi un bouton 'Connexion'
4. Créer et attacher un état pour l'email et le mot de passe
5. Lors du clique sur le bouton connexion afficher dans la console:
   'Votre email : <email>'
   'Votre mot de passe : <motDePasse>'
6. Afficher la composant 'Login' dans le fichier 'App.js'

# Exo 6 - Les routes

Vous pouvez vous aider de la documentation
https://reactrouter.com/native/guides/quick-start

1. Commencer par installer 'react-router-native'
   (npm i react-router-native)
   1.2 Retoucher le fichier "app.json", dans la séction
   web, juste après la clefs favicon rajouter
   la config suivante :
   ```
   "build": {
    "babel": {
      "include": ["react-router-native"]
    }
   }
   ```
2. Dans le répertoire src, créer un répertoire
   'screens'.
3. Déplacer dans le répertoire 'screens' les
   composants suivant : "BookList", "CreateAccount"
   "Login"
4. Dans App.js, mettez en place le composant
   `NativeRouter`
5. Dans le composant "Content" de App.js, remplacer
   ses enfants par 3 'Route' :
   "/" => BookList
   "/connexion" => Login
   "/inscription" => CreateAccount
6. Créer un composant "Menu", qui affiche 3 'Link' :
   "Accueil", "Inscription" et "Connexion"

# Exo 7 - Inscription

1. Dans le fichier `src/screens/CreateAccount`, lorque l'utilisateur valide
   le formulaire utiliser firebase pour créer un
   utilisateur.

2. Pour cela utiliser la fonction createUserWithEmailAndPassword
   de 'firebase/auth'

3. Et afficher l'utilisateur créé dans la console.

4. Vous retrouverez la documentation sur ce lien la :
   https://firebase.google.com/docs/auth/web/start#web-v9

# Exo - 8 Connexion

Dans le fichier `Login.js`

1. Importer la constante "auth" depuis le fichier firebase
   (vous avez un éxemple de le fichier CreateAccount.js)
2. Lancer un effet lorsque l'on clique sur le bouton
   "Connexion"
3. Dans cette effet utiliser `auth.signInWithEmailAndPassword(email, password)` qui est une fonction asynchrone. Si tout
   ce passe bien, afficher un text de couleur verte "Bienvenue <email>". Sinon, afficher un texte rouge
   avec "Email ou mot de passe invalide"

Vous pouvez aider de la documentation de firebase :
https://firebase.google.com/docs/auth/web/password-auth?authuser=0#web-v8
