// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAj8a1jWv_K5MCcjkmaYVVBWayaRIb1RJE',
  authDomain: 'book-library-c0f88.firebaseapp.com',
  projectId: 'book-library-c0f88',
  storageBucket: 'book-library-c0f88.appspot.com',
  messagingSenderId: '461014580063',
  appId: '1:461014580063:web:a81cf3555badf0ef7c94ea',
  measurementId: 'G-NX3KF8EYPZ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore()
