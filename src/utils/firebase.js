// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCItLW8HWE2PWz5Nor4rlAuCTzGs6ziaYk',
  authDomain: 'netflixgpt-6061e.firebaseapp.com',
  projectId: 'netflixgpt-6061e',
  storageBucket: 'netflixgpt-6061e.appspot.com',
  messagingSenderId: '918877488823',
  appId: '1:918877488823:web:2b2b0b4e46395bd9ecaf32',
  measurementId: 'G-2DNVLB79BH',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
