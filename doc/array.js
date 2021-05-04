const userList = [
    { firstname: 'david', lastname: 'jegat', age: 30 },
    { firstname: 'john', lastname: 'doe', age: 36 },
    { firstname: 'jane', lastname: 'doe', age: 25 },
    { firstname: 'eric', lastname: 'smith', age: 45 },
]


/**
 * En javascript on peut réaliser des opérations sur des tableaux
 * en utilisant des « fonction » de notre tableaux.
 * 
 * La fonction la plus simple est le « map ».
 * éxemple transformer notre tableaux d'utilisateur en un tableaux noms:
 * 
 * const names = [ 'david jegat', 'john doe', 'jane doe', 'eric smith' ]
 */

/**
 * Ici map créé d'abord un tableaux vide : []
 * 
 * Il éxécute la fonction avec le premier élément du tableaux: ({ firstname: 'david', lastname: 'jegat', age: 30 })
 * et met dans le tableaux vide la valeur de retour de la fonction:
 * 
 * Popur le premier élément, names contiendra [ 'david jegat' ]
 * Pour le second: [ 'david jegat', 'john doe' ]
 * etc ...
 */
const names = userList.map(function (user) {
    const fullName = `${user.firstname} ${user.lastname}`;

    return fullName;
})

console.log(names) // [ 'david jegat', 'john doe', 'jane doe', 'eric smith' ]


// On utilise une fonction fléché à une seule valeur de retour
const names2 = userList.map((user) => `${user.firstname} ${user.lastname}`)

// On peut enlever les parenthéses autour d'un argument UNIQUE d'une fonction
// fléché:
const names3 = userList.map(user => `${user.firstname} ${user.lastname}`)

// On peut même utiliser la destructuration d'argument !
const names4 = userList.map(({ firstname, lastname }) => `${firstname} ${lastname}`)