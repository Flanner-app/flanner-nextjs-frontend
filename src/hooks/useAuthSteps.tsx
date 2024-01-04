import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useUser } from '@/context/AuthProvider'
import { User } from '@/types/user'

const useAuthSteps = (step?: 'initial') => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      return
    }

    if (step === 'initial' && !user.preferences) {
      router.push('/auth/preferences')
      return
    }
    if (!user.appliances || !user.appliances.length) {
      router.push('/auth/appliances')
      return
    }
    if (!user.skill) {
      router.push('/auth/skill')
      return
    }
    router.push('/')
  }, [router, step, user])
}

export default useAuthSteps
