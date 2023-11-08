import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, Heart } from 'react-feather'
import { getRandomBgColor } from '@/utils/colors'
import { formatNumberToSmall } from '@/utils/numbers'
import Tag from './Tag'

type BlogCardProps = {
  title: string
  tags: string[]
  imgSrc: string
  viewsAmount: number
  likesAmount: number
}

const BlogCard = ({
  title,
  tags,
  imgSrc,
  viewsAmount,
  likesAmount,
}: BlogCardProps) => {
  return (
    <Link href="/" className="group relative">
      <div
        className={clsx(
          'block overflow-hidden rounded-2xl border-2 border-black-default',
          'group-hover:-translate-x-1.5 group-hover:-translate-y-1.5',
          'relative z-[2] transition-[transform,colors] duration-100',
          'bg-yellow-dark',
        )}
      >
        <div
          className={clsx(
            'relative aspect-[4/3] max-h-96 w-full border-b-2 border-black-default',
            'after:absolute after:z-10 after:h-1/2 after:w-full after:bg-gradient-to-b',
            'after:from-black-default/30 after:to-transparent',
          )}
        >
          <div className="absolute right-3 top-3 z-20 flex items-center gap-3">
            <Tag type="info">
              <Eye size={14} />
              {formatNumberToSmall(viewsAmount)}
            </Tag>
            <Tag type="info">
              <Heart size={14} />
              {formatNumberToSmall(likesAmount)}
            </Tag>
          </div>
          <Image
            src={imgSrc}
            sizes="768px"
            fill
            className="object-cover"
            alt={title}
          />
        </div>
        <div className="px-4 py-3">
          <h3 className="mb-4 font-rubik text-lg font-medium leading-tight">
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'absolute inset-0 z-[1] h-full w-full rounded-2xl border-2 border-black-default',
          getRandomBgColor(),
        )}
      />
    </Link>
  )
}

export default BlogCard
