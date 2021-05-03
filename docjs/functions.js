/**
 * Les fonctions sont une suite d'instructions que l'ont
 * peut réutiliser comme on le souhaite.
 * 
 * Les fonctions accèpte des paramètres et retourne une valeur.
 * 
 * Éxemple classique une fonctionne qui additionne
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
    return x + y;
}

/**
 * Il éxiste des fonctions fléché à une seul instructions
 */
const additionne3 = (x, y) => x + y