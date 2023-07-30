import Input from '@/components/shared/Input'

const AuthPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <Input label="First Name" placeholder="Joe" />
      <Input label="Last Name" placeholder="Biden" />
    </div>
  )
}

export default AuthPage
