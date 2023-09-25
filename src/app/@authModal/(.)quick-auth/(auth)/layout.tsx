'use client'

import Modal from '@/components/shared/Modal'
import useAuthStore from '@/store/useAuthStore'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState, ReactNode } from 'react'

const AuthModalLayout = ({ children }: { children: ReactNode }) => {
  const [observeClose, setObserveClose] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const [authMeta, setAuthMeta] = useAuthStore((state) => [
    state.meta,
    state.setMeta,
  ])

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (observeClose && !authMeta.isAuthModalOpen) {
      const modalTransitionDuration = 150
      setTimeout(() => setIsClosing(true), modalTransitionDuration)
    }
  }, [observeClose, authMeta.isAuthModalOpen])

  useEffect(() => {
    if (isClosing) {
      router.back()
    }
  }, [pathname, isClosing, router])

  useEffect(() => {
    setAuthMeta({ isAuthModalOpen: true })
    setObserveClose(true)
  }, [setAuthMeta])

  return (
    <Modal
      paddings="none"
      isOpen={authMeta.isAuthModalOpen}
      close={() => setAuthMeta({ isAuthModalOpen: false })}
      className="max-h-[80vh] sm:!max-w-3xl"
    >
      {children}
    </Modal>
  )
}

export default AuthModalLayout
