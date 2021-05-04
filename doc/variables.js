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
 * Attention ces trois moyens sont bien différents :
 * 
 * var: Il créé une variable « globale au scope ». Il est déconseillé
 * car pas assez performant.
 * 
 * let: Il créé une variable « attaché au scope ». Il est conseillé
 * dans la pluplart des cas
 * 
 * const: Tout comme `let`, mais sa valeur ne peux pas changer !
 * 
 * éxemple:
 */

// Ici pas d'erreur
name = 'Jean';

// Ici non plus, pas d'erreur
name2 = "Jack";

// Ici il y a une erreur car c'est une constante
name3 = "Jane";

/**
 * En javascript il existe des types de valeur 
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

// Concaténation de chaine de charactères
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

/**
 * 2. Les objects
 */
let book = { title: 'Retour de vacance', author: 'Jean', price: 24.5 }

// Accéde au titre de mon bouquin
console.log(book.title) // "Retour de vacance"

// On peut accéder à une valeur en utilisant une chaine de character
console.log(book['price']) // 24.5

// Ce que ça nous permet de faire:
let key = 'author'
console.log(book[key]) // "Jean"

// un éxemple plus complèxe
const library = [
    { title: 'Les murailles de feu' },
    { title: 'Le philosophe' },
    { title: 'JS pour les nuls' },
]

console.log(library[1].title)

/**
 * Les objets peuvent être imbriqués les uns dans les autres
 */
const animal = { type: 'chat' }
const persan = { age: 32, name: 'Felix' }

// Fusion de 2 objets
const felix = { ...animal, ...persan }

console.log(felix.type) // 'chat'
console.log(felix.age) // 32
console.log(felix.name) // "Felix"

/**
 * Depuis ES6 il éxiste un system qu'on nomme la
 * "destructuration des arguments"
 * 
 * Cela nous permet d'accéder facilement à des index de tableaux
 * ou bien des clefs d'objet
 */

// Ici on déclare un tableaux
const ages = [ 12, 34, 43, 52 ]

// je vais accéder à la première valeur de mon tableaux
// et construire un tableaux avec le reste des valeurs
const [firstAge, ...restAges] = ages;

console.log(firstAge) // 12
console.log(restAges) // [ 34, 43, 52 ]

// Ici on déclare un objet
const product = { name: 'Casquette', price: 34.50, category: 'Cloth' }

// Je vais accéder à ma clefs "name" et créer un nouvel object
// avec le reste des clefs
const {name, ...restProduct} = product;

console.log(name) // "Casquette"
console.log(restProduct) // { price: 34.50, category: 'Cloth' } 

