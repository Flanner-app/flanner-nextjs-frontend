'use client'

import { SessionProvider, useSession } from 'next-auth/react'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { User } from '@/types/user'

type Props = {
  children?: ReactNode
}

type ContextType = {
  user: User | null
}

const defaultContext: ContextType = {
  user: null,
}

const UserContext = createContext(defaultContext)

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null)

  const { status } = useSession()

  const setCurrentUser = useCallback(async () => {
    const userRes = await fetch('/api/user').then((res) => res.json())

    setUser(userRes)
  }, [])

  useEffect(() => {
    if (status === 'authenticated') {
      setCurrentUser()
    }
  }, [status, setCurrentUser])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

const AuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <UserProvider>{children}</UserProvider>
    </SessionProvider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}

export default AuthProvider
