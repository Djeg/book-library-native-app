/**
 * L'import et l'export permet de découper son code
 * en plusieurs fichiers.
 * 
 * Il éxiste 2 mots clefs:
 * - import: Importe un membre (variables, fonctions etc ...) depuis
 * un autre fichier javascript
 * - export: Exporte un membre pour être importer depuis un autre fichier
 */


// on importe la liste d'utilisateur depuis un autre fichier
import { userList, additionne } from './imp/user'


/**
 * Il existe des import et export dits "par défaut".
 * Ici on importe la variable exporter par défaut de notre
 * fichier "./imp/user.js":
 */
import userList from './imp/user'