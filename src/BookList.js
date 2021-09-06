import React from 'react'
import { ScrollView } from 'react-native'
import BookThumbnail from './BookThumbnail'

export default () => {
  return (
    <ScrollView>
      <BookThumbnail
        title='Harry Potter'
        description='Harry Potter'
        price={21.0}
        image='https://static.dezeen.com/uploads/2021/04/harry-potter-michele-de-lucchi-covers_dezeen_2364_col_21-852x1261.jpg'
      />
      <BookThumbnail
        title='Harry Potter'
        description='Harry Potter'
        price={21.0}
        image='https://static.dezeen.com/uploads/2021/04/harry-potter-michele-de-lucchi-covers_dezeen_2364_col_21-852x1261.jpg'
      />
      <BookThumbnail
        title='Harry Potter'
        description='Harry Potter'
        price={21.0}
        image='https://static.dezeen.com/uploads/2021/04/harry-potter-michele-de-lucchi-covers_dezeen_2364_col_21-852x1261.jpg'
      />
      <BookThumbnail
        title='Harry Potter'
        description='Harry Potter'
        price={21.0}
        image='https://static.dezeen.com/uploads/2021/04/harry-potter-michele-de-lucchi-covers_dezeen_2364_col_21-852x1261.jpg'
      />
      <BookThumbnail
        title='Harry Potter'
        description='Harry Potter'
        price={21.0}
        image='https://static.dezeen.com/uploads/2021/04/harry-potter-michele-de-lucchi-covers_dezeen_2364_col_21-852x1261.jpg'
      />
    </ScrollView>
  )
}
