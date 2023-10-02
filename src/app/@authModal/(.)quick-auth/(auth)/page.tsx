import Image from 'next/image'
import InitialAuthStep from '@/components/authFlow/InitialStep'

const AuthModal = () => {
  return (
    <div className="flex h-full flex-col gap-12 overflow-y-auto">
      <InitialAuthStep />
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src="/images/illus/auth-modal.webp"
          width={300}
          height={300}
          alt=""
        />
      </div>
    </div>
  )
}

export default AuthModal
