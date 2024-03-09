import { User } from '@/types/user'

export const getCurrentUser = async (): Promise<User> => {
  const user = await fetch(
    process.env.NEXT_PUBLIC_URL + '/api/user/getCurrentUser',
  )
    .then((res) => res.json())
    .catch((err) => console.log(err))

  return user.data
}

export const updateCurrentUser = async (body: Partial<User>): Promise<User> => {
  const user = await fetch(process.env.NEXT_PUBLIC_URL + '/api/user/update', {
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))

  return user.data
}
