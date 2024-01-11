// import { notFound, redirect } from 'next/navigation'
import ProfileContent from '@/components/profile/ProfileContent'

const ProfilePage = async () => {
  // const user = await fetch(process.env.NEXT_PUBLIC_URL + '/api/user')
  //   .then((res) => res.json())
  //   .catch((e) => console.log(e))

  // console.log(1, user)
  // if (user.status && user.status === 307) {
  //   redirect('/auth')
  // }
  // if (!user) {
  //   return notFound()
  // }

  return <ProfileContent />
}

export default ProfilePage
