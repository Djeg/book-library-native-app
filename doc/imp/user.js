/**
 * Je déclare une constante list que j'éxporte
 */
export const userList = [
    { firstname: 'david', lastname: 'jegat', age: 30 },
    { firstname: 'john', lastname: 'doe', age: 36 },
    { firstname: 'jane', lastname: 'doe', age: 25 },
    { firstname: 'eric', lastname: 'smith', age: 45 },
]

// Ici cette constante ne sera pas accessible depuis l'exterieur
const TEST = 'coucou'

export const additionne = (x, y) => x + y


/**
 * On peut définir une variable à exporter par défaut:
 */
export default userList;