// import { User } from '@/types/user'

import Link from 'next/link'
import { ArrowDown, Settings } from 'react-feather'
import AvatarBlock from './AvatarBlock'
import Button from '../shared/Button'
import RecipeCard from '../shared/cards/RecipeCard'
import Heading from '../shared/typography/Heading'

// type ProfileContentProps = {
//   user: User
// }

const ProfileContent = () => {
  return (
    <div className="relative p-8">
      <div className="fixed top-22.5 flex w-full max-w-64 flex-col gap-3">
        <AvatarBlock />
        <Link href="/profile/settings">
          <Button size="L" appearence="black" wrapperClassName="w-full">
            <Settings size={20} /> Settings
          </Button>
        </Link>
      </div>
      <div className="pl-72">
        <Heading as="h1" type="display" className="mb-4">
          Your cooking history
        </Heading>
        <div className="flex w-full flex-col items-center gap-2">
          <span className="select-none font-rubik text-19xl font-bold leading-none">
            GO
          </span>
          <ArrowDown size={64} />
          <Link href="/" className="w-full max-w-64">
            <Button appearence="yellow" size="L">
              Cook!
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <RecipeCard
            href="/blog/1"
            title="Similar post"
            tags={[]}
            imgSrc="/images/fridge-placeholder.webp"
            viewsAmount={1350}
            likesAmount={150}
            totalCookingTime="30 min"
          />
          <RecipeCard
            href="/blog/1"
            title="Similar post"
            tags={[]}
            imgSrc="/images/fridge-placeholder.webp"
            viewsAmount={1350}
            likesAmount={150}
            totalCookingTime="30 min"
          />
          <RecipeCard
            href="/blog/1"
            title="Similar post"
            tags={[]}
            imgSrc="/images/fridge-placeholder.webp"
            viewsAmount={1350}
            likesAmount={150}
            totalCookingTime="30 min"
          />
          <RecipeCard
            href="/blog/1"
            title="Similar post"
            tags={[]}
            imgSrc="/images/fridge-placeholder.webp"
            viewsAmount={1350}
            likesAmount={150}
            totalCookingTime="30 min"
          />
          <RecipeCard
            href="/blog/1"
            title="Similar post"
            tags={[]}
            imgSrc="/images/fridge-placeholder.webp"
            viewsAmount={1350}
            likesAmount={150}
            totalCookingTime="30 min"
          />
          <RecipeCard
            href="/blog/1"
            title="Similar post"
            tags={[]}
            imgSrc="/images/fridge-placeholder.webp"
            viewsAmount={1350}
            likesAmount={150}
            totalCookingTime="30 min"
          />
          <RecipeCard
            href="/blog/1"
            title="Similar post"
            tags={[]}
            imgSrc="/images/fridge-placeholder.webp"
            viewsAmount={1350}
            likesAmount={150}
            totalCookingTime="30 min"
          />
          <RecipeCard
            href="/blog/1"
            title="Similar post"
            tags={[]}
            imgSrc="/images/fridge-placeholder.webp"
            viewsAmount={1350}
            likesAmount={150}
            totalCookingTime="30 min"
          />
          <RecipeCard
            href="/blog/1"
            title="Similar post"
            tags={[]}
            imgSrc="/images/fridge-placeholder.webp"
            viewsAmount={1350}
            likesAmount={150}
            totalCookingTime="30 min"
          />
          <RecipeCard
            href="/blog/1"
            title="Similar post"
            tags={[]}
            imgSrc="/images/fridge-placeholder.webp"
            viewsAmount={1350}
            likesAmount={150}
            totalCookingTime="30 min"
          />
          <RecipeCard
            href="/blog/1"
            title="Similar post"
            tags={[]}
            imgSrc="/images/fridge-placeholder.webp"
            viewsAmount={1350}
            likesAmount={150}
            totalCookingTime="30 min"
          />
          <RecipeCard
            href="/blog/1"
            title="Similar post"
            tags={[]}
            imgSrc="/images/fridge-placeholder.webp"
            viewsAmount={1350}
            likesAmount={150}
            totalCookingTime="30 min"
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileContent
