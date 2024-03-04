// import { User } from '@/types/user'

import clsx from 'clsx'
import { ArrowDown, Settings } from 'react-feather'
import { urls } from '@/constants/urls'
import AvatarBlock from './AvatarBlock'
import { LinkButton } from '../shared/buttons/LinkButton'
import RecipeCard from '../shared/cards/RecipeCard'
import Heading from '../shared/typography/Heading'

// type ProfileContentProps = {
//   user: User
// }

const ProfileContent = () => {
  return (
    <div className="relative p-6 sm:p-8">
      <div
        className={clsx(
          'flex w-full flex-col gap-3 sm:fixed sm:top-22.5 sm:max-w-64',
          'mx-auto mb-6 max-w-sm sm:mb-0',
        )}
      >
        <AvatarBlock />
        <LinkButton
          href={urls.settings}
          size="L"
          appearence="black"
          wrapperClassName="w-full"
        >
          <Settings size={20} /> Settings
        </LinkButton>
      </div>
      <div className="sm:pl-72">
        <Heading as="h1" type="display" className="mb-4">
          Your cooking history
        </Heading>
        <div className="flex w-full flex-col items-center gap-2">
          <span className="select-none font-rubik text-19xl font-bold leading-none">
            GO
          </span>
          <ArrowDown size={64} />
          <LinkButton
            href={urls.home}
            appearence="yellow"
            size="L"
            wrapperClassName="w-full max-w-64"
          >
            Cook!
          </LinkButton>
        </div>

        <div
          className={clsx(
            'grid grid-cols-1 gap-4 sm:grid-cols-1',
            'md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3',
          )}
        >
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
