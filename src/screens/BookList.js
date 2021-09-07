import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import BookThumbnail from '../BookThumbnail'
import db from '../firebase'

export default () => {
  const [books, setBooks] = useState([])

  // Nous créons un effét qui se déclenchera lors de l'affichage
  // de notre composant
  useEffect(() => {
    // Je céer une fonction asynchrone afin de récupérer
    // les livres de firestore
    const fetchBooks = async () => {
      // On utilise getDocs afin de récupérer plusieurs documents
      // On utilise collection afin de récupérer une collection
      // getDocs est asynchrone, et retourne un QuerySnaphot
      const snapshot = await getDocs(collection(db, 'books'))

      // Dans ce query snapshot, nous avons la liste des document
      // snapshot.docs (contient un tableau de documents)
      // Une fois que l'on obtient un document, nous pouvons
      // récupérer les données graçe à document.data()
      const receivedBooks = snapshot.docs.map((document) => {
        // Ici, document.data() retourne les données stocké
        // dans le document concerné. Attention, document.data
        // ne retourne pas l'id !
        // Pour obtenir il faut utiliser document.id
        return {
          ...document.data(),
          id: document.id,
        }
      })

      // On assigne notre state "books" avec les livres recus
      // (receivedBooks)
      setBooks(receivedBooks)
    }

    // j'appel la fonction asynchrone
    fetchBooks()
  }, [])

  // Voici un exemple, plus conscis et difficile d'utilisation
  // des promesses dans useEffect
  //
  // useEffect(() => {
  //   getDocs(collection(db, 'books'))
  //     .then(({ docs }) =>
  //       docs.map((document) => ({
  //         ...document.data(),
  //         id: document.id,
  //       }))
  //     )
  //     .then(setBooks)
  // }, [])

  return (
    <ScrollView>
      {books.map((book) => (
        <BookThumbnail
          key={`book-${book.id}`}
          title={book.title}
          description={book.description}
          price={book.price}
          image={book.image}
        />
      ))}
    </ScrollView>
  )
}
