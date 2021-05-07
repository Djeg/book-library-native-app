# React router

React router est un outil plus simple pour gérer la navigation.

La documentation est [ici](https://reactrouter.com/native/guides/quick-start) :)

## Installation

Pour installer react router rien de plus simple:

```shell
yarn add react-router-native
```

## Retoucher le fichier `app.json` et rajouter:

```js
"web": {
  "build": {
    "babel": {
      "include": ["react-router-native"]
    }
  }
}
```

## Mise en place

React router se base sur 3 components:

1. `NativeRouter`: Se connécte à l'historique de votre téléphone
2. `Route`: Permet de créer des « écrans »
3. `Link`: Permet de créer des liens entre les écrans

## Exemple:

```js
// App.js
import { StatusBar } from "expo-status-bar";
import React from "react";
import Welcome from "./src/Screens/Welcome";
import { NativeRouter, Route } from "react-router-native";
import Layout from "./src/Components/Layout";
import Hello from "./src/Screens/Hello";

export default function App() {
  return (
    {/* On créé le router */}
    <NativeRouter>
      <Layout>
        {/* On créé des écrans */}
        <Route exact path="/" component={Welcome} />
        <Route exact path="/hello" component={Hello} />
      </Layout>
      <StatusBar style="auto" />
    </NativeRouter>
  );
}
```
