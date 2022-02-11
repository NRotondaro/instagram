// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrJsnKMkxW6Aw_bH_rQYZRmHrjiyfwvtE',
  authDomain: 'instagram-clone-58d72.firebaseapp.com',
  projectId: 'instagram-clone-58d72',
  storageBucket: 'instagram-clone-58d72.appspot.com',
  messagingSenderId: '823836650216',
  appId: '1:823836650216:web:592482824aadef39c1b75d',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
