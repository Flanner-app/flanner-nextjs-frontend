'use client'

import { auth } from '@/firebaseConfig'
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type contextType = {
  user: User | null
  signInWithGoogle: () => Promise<void>
  logOut: () => Promise<void>
}

const defaultContext: contextType = {
  user: null,
  // eslint-disable-next-line
  signInWithGoogle: async () => {},
  // eslint-disable-next-line
  logOut: async () => {},
}

const AuthContext = createContext(defaultContext)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const { user: userData } = await signInWithPopup(auth, provider)
    setUser(userData)
  }

  const logOut = async () => {
    await signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [user])

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
