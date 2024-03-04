import clsx from 'clsx'
import Image from 'next/image'
import { ArrowRight } from 'react-feather'
import { urls } from '@/constants/urls'
import { LinkButton } from '@/components/shared/buttons/LinkButton'
import styles from './styles.module.css'

const BlogHero = () => {
  return (
    <div className="w-full border-b-2 border-black-default bg-yellow-hover">
      <div
        className={clsx(
          'mx-auto flex items-center justify-between px-4 pt-4 md:px-6 md:pt-10',
          'lg:gap-8 xl:max-w-5xl',
        )}
      >
        <div className="mb-4 md:mb-10">
          <h1
            className={clsx(
              'font-rubik text-13xl font-bold uppercase leading-none text-accent-purple',
              'sm:text-17xl md:text-19xl',
              styles.heroHeading,
            )}
          >
            Become an <br /> early user,
          </h1>
          <div
            className={clsx(
              'text-13xl font-bold uppercase leading-none text-accent-green',
              'sm:text-17xl md:text-19xl',
              styles.heroBenefits,
            )}
          >
            with benefits.
          </div>
          <LinkButton
            href={urls.auth.base}
            size="L"
            appearence="accent"
            wrapperClassName="block w-fit mt-6 md:mt-10"
          >
            Get early user status
            <ArrowRight size={20} />
          </LinkButton>
        </div>
        <div
          className={clsx(
            'relative mt-auto h-full w-full max-w-2/6 justify-end',
            'hidden lg:flex',
          )}
        >
          <Image
            src="/images/blog/gift.webp"
            width={340}
            height={340}
            alt="benefits"
            className="pointer-events-none"
          />
        </div>
      </div>
    </div>
  )
}

export default BlogHero
