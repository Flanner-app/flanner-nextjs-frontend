import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Eye, Heart } from 'react-feather'
import { Tag as TagType } from '@/types/recipes'
import { getRandomBgColor } from '@/utils/colors'
import { formatNumberToSmall } from '@/utils/numbers'
import Tag from './Tag'

type BlogCardProps = {
  href: string
  title: string
  tags: Array<TagType>
  imgSrc: string
  viewsAmount?: number
  likesAmount?: number
  totalCookingTime: string
}

const BlogCard = ({
  href,
  title,
  tags,
  imgSrc,
  viewsAmount,
  likesAmount,
  totalCookingTime,
}: BlogCardProps) => {
  return (
    <Link href={href} className="group relative">
      <div
        className={clsx(
          'block overflow-hidden rounded-xl border-2 border-black-default',
          'group-hover:-translate-x-1.5 group-hover:-translate-y-1.5',
          'relative z-[2] transition-[transform,colors] duration-100',
          'bg-yellow-dark',
        )}
      >
        <Tag
          type="info"
          className={clsx(
            'inline border-2 border-black-default bg-yellow-regular shadow-brutalism',
            'absolute left-3 top-3 z-20',
          )}
        >
          <Clock size={16} />
          {totalCookingTime}
        </Tag>
        <div className="absolute right-3 top-3 z-20 flex items-center gap-3">
          <Tag type="info">
            <Eye size={14} />
            {formatNumberToSmall(viewsAmount || 0)}
          </Tag>
          <Tag type="info">
            <Heart size={14} />
            {formatNumberToSmall(likesAmount || 0)}
          </Tag>
        </div>
        <div
          className={clsx(
            'relative aspect-[4/3] max-h-96 w-full border-b-2 border-black-default',
          )}
        >
          <div
            className={clsx(
              'absolute z-10 h-1/2 w-full bg-gradient-to-b',
              'from-black-default/30 to-transparent',
            )}
          />

          <Image
            src={imgSrc}
            sizes="768px"
            fill
            className="object-cover"
            alt={title}
          />
        </div>
        <div className="px-4 py-3">
          <h3 className="mb-2 font-rubik text-lg font-medium leading-tight">
            {title}
          </h3>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <Tag key={tag._id}>{tag.label}</Tag>
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
