import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { Link } from 'react-router-native'
import img from './Image.jpeg'

const BookList = () => {
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:3000/books')
      const json = await response.json()

      setBookList(json)
    }

    fetchBooks()
  }, [])

  return (
    <View>
      <Image source={img} style={{ width: 100, minHeight: 200 }}/>
      <Text>Liste des livres</Text>
        {bookList.map(book => (
          <View>
            <Text>{book.title}</Text>
            <Link to={`/book/${book._id}`}>
              <Image source={book.image} style={{ width: 100, minHeight: 200 }}/>
            </Link>
            <Text>{book.stars} / 5</Text>
          </View>
        ))}
    </View>
  )
}

export default BookList