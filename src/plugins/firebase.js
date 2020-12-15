import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDX3ierob6vq3D2wIMIl_B0sywuAOmoOSY',
  authDomain: 'instagram-like-app-5493e.firebaseapp.com',
  databaseURL: 'https://instagram-like-app-5493e.firebaseio.com',
  projectId: 'instagram-like-app-5493e',
  storageBucket: 'instagram-like-app-5493e.appspot.com',
  messagingSenderId: '1009260413342',
  appId: '1:1009260413342:web:b2b4005925be0503a6d68f',
  measurementId: 'G-YHJZF081JG',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
