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

De la même manière que l'on peut afficher des variables, nous pouvons aussi
placer des commentaires

```js
<View>
    {/* Ceci est un commentaire */}
    <StatusBar style="auto" />
</View>
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

## Les props

Nous pouvons passer des **props** à nos composants:

```js
const Bonjour = (props) => {
    return <Text>Bonjour {props.name} vous avez {props.age}</Text>
}
```

Ces props peuvent être passé à notre composant lors de son affichage:

```js
<View>
    <Bonjour name="Jean" age="24" />
</View>
```

Nous pouvons comme dans n'importe quelle fonctions, déstructurer
les props.

```js
const Bonjour = ({ name, age }) => {
    return <Text>Bonjour {name} vous avez {age}</Text>
}
```

Mon component Bonjour s'utilise de la même manière:

```js
<View>
    <Bonjour name="Jean" age="24" />
</View>
```

### Les enfants (children)

En JSX (tout comme en html) un component peut avoir
des enfant

Éxemple:

```js
<View>
    <Text>Coucou</Text>
</View>
```

Le Component View à pour enfant `<Text>Coucou</Text>`.

Nous pouvons facilement récupérer les enfants dans un component
grâce à `props.children` (toujours présente dans tout les components).

Exemple: Une balise text custom

```js
const LimitedText = ({ children }) => {
    return <Text numberOfLines="6">{children}</Text>
}
```

On peut utiliser ce composant `LimitedText` facilement:

```js
<View>
    <LimitedText>
        Salut les amis, je ne dépasserais jamais
        6 lignes !
    </LimitedText>
</View>
```