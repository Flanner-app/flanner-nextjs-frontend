import { redirect } from 'next/navigation'

const AuthRedirectPage = (context: { params: { path: Array<string> } }) => {
  const path = context.params.path?.length
    ? ['auth', ...context.params.path]
    : ['auth']
  redirect(`/${path.join('/')}`)
}

export default AuthRedirectPage
