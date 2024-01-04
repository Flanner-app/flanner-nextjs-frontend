'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import useAuthSteps from '@/hooks/useAuthSteps'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  useAuthSteps(
    pathname === '/auth' || pathname === '/auth/preferences'
      ? 'initial'
      : undefined,
  )

  return children
}

export default AuthLayout
