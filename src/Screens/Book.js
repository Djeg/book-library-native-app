import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-native'
import { Text, View, Image } from 'react-native'

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null)

  useEffect(() => {
    const fetchOneBook = async () => {
      const response = await fetch(`https://djeg-book-library-api.herokuapp.com/books/${id}`)
      const json = await response.json()

      setBook(json)
    }

    fetchOneBook()
  }, [])

  if (!book)
    return <Text>Chargement ...</Text>

  return (
    <View>
      <Text>{book.title}</Text>
      <Image source={book.images[0].src} style={{ width: 200, minHeight: 400 }} />
      <Text>{book.description}</Text>
      <Text>Note: {book.stars} / 5</Text>
    </View>
  )
}

export default Book