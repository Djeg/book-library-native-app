import { unmountComponentAtNode } from 'react-native-web';
/**
 * Une variable est une donnée enregistré en mémoire. Elle possède
 * un identifiant qui permet d'accéder à la donnée.
 * 
 * En javascript pour déclarer une variable on utilise `var` `let` ou
 * `const`
 * 
 * éxemple:
 */

// créé une variable name avec la valeur "David"
var name = "David";
let name2 = "David";
const name3 = "David";

/**
 * Attention c'est trois moyens sont bien différent:
 * 
 * var: Il créé une variable « global au scope ». Il est déconseillé
 * car pas assez performant.
 * 
 * let: Il créé une variable « attaché au scope ». Il est conseillé
 * dans la pluplart des cas
 * 
 * const: Tout comme `let`, mais sa valeur ne peux pas changer !
 * 
 * éxemple:
 */

// Ici pas d'érreur
name = 'Jean';

// Ici non plus d'érreur
name2 = "Jack";

// Ici il y a une erreur car c'est une constante
name3 = "Jane";

/**
 * En javascript il existe des types de valeurs:
 */

// boolean
let trigger = true; // 1
let trigger2 = false; // 0

// number
let age = 18;
let price = 24.34;

// Chaine de caractères: String
let surname = "Bob";
let email = 'bob@supermail.com';

// Concatenation de chaine de charactère
let userInfo = surname + ': ' + email; // affiche: "Bob: bob@supermail.com"

// Concatenation depuis ES6 (javascript moderne)
let userInfo2 = `${surname}: ${email}`;  // affiche: "Bob: bob@supermail.com"

/**
 * En javascript il existe 2 types complexe:
 * 
 * 1. Les tableaux
 */
let names = [ "jean", "jack", "jane" ];
// On peut accèder à un élément du tableaux en utilisant
// un index
let firstName = names[0];

// On peut boucler sur les index d'un tableaux
for (let index in names) {
    console.log(index); // Affiche 0, puis 1, puis 2
}

// On peut boucler sur les valeurs d'un tableaux
for (let name of names) {
    console.log(name); // Afficher "Jean", puis "jack", puis "jane"
}