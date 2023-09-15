'use client'

import Modal from '@/components/shared/Modal'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState, ReactNode } from 'react'

const AuthModalLayout = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false)
  const [observeClose, setObserveClose] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (observeClose && !showModal) {
      const modalTransitionDuration = 150
      setTimeout(() => setIsClosing(true), modalTransitionDuration)
    }
  }, [observeClose, showModal])

  useEffect(() => {
    if (isClosing) {
      router.back()
    }
  }, [pathname, isClosing, router])

  useEffect(() => {
    setShowModal(true)
    setObserveClose(true)
  }, [])

  return (
    <Modal isOpen={showModal} close={() => setShowModal(false)} title="title">
      {children}
    </Modal>
  )
}

export default AuthModalLayout
