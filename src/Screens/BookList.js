import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'

const BookList = () => {
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://djeg-book-library-api.herokuapp.com/books')
      const json = await response.json()

      setBookList(json)
    }

    fetchBooks()
  }, [])

  return (
    <View>
      <Text>Liste des livres</Text>
        {bookList.map(book => (
          <View>
            <Text>{book.title}</Text>
            <Image source={book.images[0].src} style={{ width: 100, minHeight: 200 }}/>
            <Text>{book.stars} / 5</Text>
          </View>
        ))}
    </View>
  )
}

export default BookList