# Installation

```
# Installation de expo
# Expo, c'est un logiciel qui retranscrit un code javascript
# dans un code Native (sur Android c'est Java, sur IOS c'est de l'objectif-C).
npm install -g expo-cli

# Pour les mac et linux
sudo npm install -g expo-cli


# Création d'un projet react native dans un répertoire
# "book-app"
expo init book-app

# Une fois le projet créé, ouvrir son éditeur de code
# VSCode dans le projet "book-app"
# On lance la commande npm start
# npm start démarre un serveur expo
npm start
```

# Arborescence d'un projet react native

- package.json et yarn.lock ou package-lock.json: Définissent les dépendances nescessaire pour faire fonctionner le projet. (des dépendances ce sont des librairies javascript qui vont venir se placer dans le répertoire `node_modules`)
- babel.config.js: Configure la version d'ECMAScript (javascript) à utiliser.
- app.json: configure votre application sur les stores Apple et Google
- .gitignore: référencie tout les fichiers qui ne seront pas dans git (donc dans github)
- `/node_modules`: Contient toutes les librairies javascript
- `/assets`: Contient toutes les images, videos, fonts, audio etc ...
- `App.js`: C'est ici que notre application commence !

## Rappel javascript :)

- [Les variables en JS](./doc/variables.js)
- [Les fonctions en JS](./doc/functions.js)
- [Le traitement des tableaux en JS](./doc/array.js)
- [L'import et l'export en JS](./doc/array.js)