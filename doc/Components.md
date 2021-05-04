# Les Composants (Components)

En react, et react native, les components sont des balises
XML/HTML qui nous permettent de construire une interface.

Exemple: Le component Text

```js
<Text>Hello</Text>
```

## La syntax: JSX

JSX c'est une syntax qui nous permet d'utiliser les components
comme du HTML.

Tout comme en HTML, les components accéptent des attributs. On
nomment les attributs en react des **Props** !

Exemple de props (disabled, désactive le text, passe en grisé):

```js
<Text disabled>Ceci est un text grisé</Text>
```

Nous pouvons passer des valeurs à nos props:

```js
<Text numberOfLines="6">Ce text ne dépassera pas 6 lignes</Text>
```

Nous pouvons passer des variables à nos props:

```js
const maxLines = 6;

<Text numberOfLines={maxLines}>Ce text ne dépassera pas 6 lignes</Text>
```

Nous pouvons aussi passer des variables à l'intérieur de notre component:

```js
const hello = 'Coucou tout le monde';

<Text>{hello}</Text>
```

Les components peuvent être "double" (balise ouvrante et fermante), ou
bien simple (balise qui s'ouvre et se referme directement):

```js
<StatusBar style="auto" />
```

## Qu'est ce que c'est qu'un composant

Un composant, c'est une fonction qui **commence par une majuscule** et qui
retourne du JSX.

Exemple un composant "Bonjour":

```js
const Bonjour = () => {
    return <Text>Bonjour tout le monde</Text>
}
```

Un composant s'utilise comme une balise HTML:

```js
<View>
    <Bonjour />
</View>
```