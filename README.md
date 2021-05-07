# Créer un nouveau projet React Native

La première étape c'est l'installation de expo !

Expo, c'est un logiciel qui retranscrit un code javascript
dans un code Native (sur Android c'est Java, sur IOS c'est de l'objectif-C).

```
npm install -g expo-cli

# Pour les mac et linux
sudo npm install -g expo-cli
```

Ensuite nous devons créer un projet react native dans un répertoire
(ex: "book-app")

```
expo init book-app
```

Une fois le projet créé, ouvrir son éditeur de code
VSCode dans le projet "book-app".
On lance la commande `npm start` (
`npm start` démarre un serveur expo)

```
npm start
```

# Installer ce projet :)

1. Télécharger le projet avec ce [lien](https://github.com/Djeg/book-library-native-app/archive/refs/heads/master.zip).
2. Extraire le répertoire ou vous le souhaitez
3. Ouvrir le répertoire avec VSCode
4. Exécuter les commandes:

```shell
yarn install
yarn start

# ou en une seule ligne
yarn install && yarn start
```

# Installer ce projet en utilisant GIT

1. Cloner le projet de le répertoire de votre choix:

```
git clone https://github.com/Djeg/book-library-native-app.git nomDuDossierIci
```

2. Ouvrez le dossier créé avec VSCode
3. Éxécuter les commandes:

```shell
yarn install
yarn start

# ou en une seule ligne
yarn install && yarn start
```

# Arborescence d'un projet react native

- `package.json` et yarn.lock ou package-lock.json: Définissent les dépendances nescessaire pour faire fonctionner le projet. (des dépendances ce sont des librairies javascript qui vont venir se placer dans le répertoire `node_modules`)
- `babel.config.js`: Configure la version d'ECMAScript (javascript) à utiliser.
- `app.json`: configure votre application sur les stores Apple et Google
- `.gitignore`: référencie tout les fichiers qui ne seront pas dans git (donc dans github)
- `/node_modules`: Contient toutes les librairies javascript
- `/assets`: Contient toutes les images, videos, fonts, audio etc ...
- `/src`: Contient tout notre **code source** (nos composants etc ...). C'est ici qu'on passera
  le plus clair de notre temps.
- `App.js`: C'est ici que notre application commence !

## Rappel javascript :)

- [Les variables en JS](./doc/variables.js)
- [Les fonctions en JS](./doc/functions.js)
- [Le traitement des tableaux en JS](./doc/array.js)
- [L'import et l'export en JS](./doc/import-export.md)

## Cours React Native

- [Les composants](./doc/Components.md)
- [Les feuilles de style](./doc/stylesheets.md)
- [Le state en react](./doc/State.md)
- [La navigation en react native](./doc/navigation.md)

## Les exercices :

- [Tout les exercices](./doc/exos.md)
