import Image from 'next/image'
import InitialAuthStep from '@/components/authFlow/InitialStep'

const AuthPage = () => {
  return (
    <div className="flex h-full">
      <div className="relative hidden w-full md:block md:max-w-1/3 lg:max-w-5/12">
        <Image
          src="/images/illus/auth-illu.webp"
          fill
          alt=""
          className="pointer-events-none select-none object-cover"
        />
      </div>
      <div className="mx-auto flex h-full w-full max-w-screen-sm md:items-center md:justify-center">
        <InitialAuthStep className="w-full sm:p-12" />
      </div>
    </div>
  )
}

export default AuthPage
