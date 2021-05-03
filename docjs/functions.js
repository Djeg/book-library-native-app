/**
 * Les fonctions sont une suite d'instructions que l'ont
 * peut réutiliser comme on le souhaite.
 * 
 * Les fonctions accèpte des paramètres et retourne une valeur.
 * 
 * Éxemple classique une fonction qui additionne
 */
function additionne(x, y) {
    const resultat = x + y;

    return resultat;
}

// immutable

// On peut appeler une fonction et lui renseigner des paramètres
const _x = additionne(2, 4)

console.log(_x) // 6

/**
 * Depuis ES6 nous pouvons créer des fonctions "fléché" (Arrow Functions)
 * 
 * Ces fonctions ce déclare en utilisant `let` ou `const`
 */
const additionne2 = (x, y) => {
    const resultat = x + y;

    return resultat;
}

/**
 * Il éxiste des fonctions fléché à une seul instruction
 */
const additionne3 = (x, y) => x + y

/**
 * éxemple plus complexe avec des objets
 */
const dentifrice = { name: 'dentifrice', price: 4.5 }
const brosseADent = { name: 'Brosse à dent', price: 2.5 }

// Ici une fonction non simplifié
function addTwoProductPrice(product1, product2) {
    const total = product1.price + product2.price;
    
    return total;
}

console.log(addTwoProductPrice(dentifrice, brosseADent)) // 7

// Ici une fonction fléché (Arrow function):
const addProduct = (product1, product2) => {
    const total = product1.price + product2.price;
    
    return total;
}

console.log(addProduct(dentifrice, brosseADent)) // 7

// ici une fonction fléché avec une seule instruction
const addProduct2 = (product1, product2) => product1.price + product2.price

console.log(addProduct2(dentifrice, brosseADent)) // 7

// On rajoute de la destructuration d'arguments:
const addProduct3 = ({ price }, { price: secondPrice }) => price + secondPrice

console.log(addProduct3(dentifrice, brosseADent)) // 7