'use client'

import { Session } from 'next-auth'
import { SessionProvider, useSession } from 'next-auth/react'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
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
  setUser: Dispatch<SetStateAction<User | null>>
  session: Session | null
  status: 'authenticated' | 'loading' | 'unauthenticated'
}

const defaultContext: ContextType = {
  user: null,
  setUser: () => null,
  session: null,
  status: 'unauthenticated',
}

export const UserContext = createContext(defaultContext)

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null)

  const { data: session, status } = useSession()

  const setCurrentUser = useCallback(async () => {
    const userRes = await fetch('/api/user')
      .then((res) => res.json())
      .catch(() => null)

    userRes.data && setUser(userRes.data)
  }, [])

  useEffect(() => {
    if (status === 'authenticated' && !user) {
      setCurrentUser()
    } else if (status === 'unauthenticated') {
      setUser(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, setCurrentUser])

  return (
    <UserContext.Provider value={{ session, status, user, setUser }}>
      {children}
    </UserContext.Provider>
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
