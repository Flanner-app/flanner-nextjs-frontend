'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { Bookmark, ChevronLeft, Heart, Link } from 'react-feather'
import Button from '@/components/shared/Button'
// import Heading from '@/components/shared/typography/Heading'

type BlogPostHeaderProps = {
  title: string
}

const BlogPostHeader = ({ title }: BlogPostHeaderProps) => {
  const router = useRouter()
  console.log(title)

  return (
    <div
      className={clsx(
        'w-full border-b-2 border-black-regular px-4 py-2',
        'flex items-center justify-between gap-6',
        'bg-yellow-dark/90 backdrop-blur-md',
        'sticky top-0 z-20',
      )}
    >
      <div className="flex items-center gap-4">
        <Button
          size="S"
          appearence="ghost"
          containsIconOnly
          onClick={() => router.back()}
        >
          <ChevronLeft size={20} />
        </Button>
        {/* <Heading as="h2" type="headline" className="text-ellipsis">
          {title}
        </Heading> */}
      </div>
      <div className="flex items-center gap-2">
        <Button size="S" appearence="white" containsIconOnly>
          <Bookmark size={20} />
        </Button>
        <Button size="S" appearence="white" containsIconOnly>
          <Heart size={20} />
        </Button>
        <Button size="S" appearence="white" containsIconOnly>
          <Link size={20} />
        </Button>
      </div>
    </div>
  )
}

export default BlogPostHeader
