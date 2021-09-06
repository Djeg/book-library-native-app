# Les opérateurs de destruction

Se sont des opérateurs qui facilite la manipulation de tableaux
et d'objet

## Les tableaux

```js
const users = ['john', 'jane', 'rose']

// On accéde à john
const john = users[0]

// On destructure la tableaux users,
// on enregistre le premier élément dans
// une variable john et la reste du tableaux
// dans la restUsers
const [john, ...restUsers] = users

console.log(john) // 'john'
console.log(restUsers) // [ 'jane', 'rose' ]
```

## Les objets

```js
const user = {
  firstname: 'John',
  lastname: 'Doe',
  age: 34,
  email: 'john@mail.com',
}

const { firstname, lastname, ...restUser } = user

console.log(firstname) // 'John'
console.log(lastname) // 'Doe'
console.log(restUser) // { age: 34, email: 'john@mail.com' }

// Il est possible d'extraire et renomer un clefs
const { email: mail } = user

console.log(mail) // 'john@mail.com'
```

# La reconstruction

## Les tableaux

```js
const listOfMaleUsers = ['john', 'jack']
const listOfFemaleUsers = ['rose', 'jane']

const listUsers = [...listOfMaleUsers, ...listOfFemaleUsers]

console.log(listUsers) // ['john', 'jack', 'rose', 'jane']
```

## Les objets

```js
const account = {
  email: 'john@mail.com',
  password: 'john',
  firstname: 'johny',
}

const person = {
  firstname: 'john',
  lastname: 'doe',
}

const user = {
  ...account,
  ...person,
  email: 'john2@mail.com',
}

console.log(user.firstname) // 'john'
console.log(user.email) // 'john2@mail.com'
```

```js
const afficherUser = ({ firstname, lastname }) => {
  console.log(firstname, lastname)
}

const afficherUser2 = (user) => {
  console.log(user.firstname, user.lastname)
}

const john = {
  firstname: 'john',
  lastname: 'doe',
}

afficherUser(john)
```
