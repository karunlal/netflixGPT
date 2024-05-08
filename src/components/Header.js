import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { LOGO, USER_AVATAR } from '../utils/constants'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate('/error')
      })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/browse')
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate('/')
      }
    })
    // Unsubscribe when component unmounts
    return () => unsubscribe()
  }, [])
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      <div className="flex p-2">
        <img className="w-12 h-12" src={USER_AVATAR} alt="usericon" />
        <button
          onClick={handleSignOut}
          className="font-bold text-white font-bold"
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default Header
