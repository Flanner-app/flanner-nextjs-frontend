'use client'

import { useAuth } from '@/context/AuthContext'

const Home = () => {
  const { user } = useAuth()
  console.log(user)
  return <main className="grow p-8"></main>
}

export default Home
