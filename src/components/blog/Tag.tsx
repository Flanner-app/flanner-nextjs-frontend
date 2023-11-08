import clsx from 'clsx'
import { ReactNode } from 'react'
import { getRandomBgColor } from '@/utils/colors'

type TagProps = {
  type?: 'regular' | 'info'
  className?: string
  children: ReactNode
}

const Tag = ({ type = 'regular', className, children }: TagProps) => {
  return (
    <div
      className={clsx(
        'w-fit rounded-md px-3 py-1.5 text-sm font-medium leading-none',
        {
          [getRandomBgColor({ bright: true })]: type === 'regular',
          'flex items-center gap-1 bg-white bg-opacity-70 backdrop-blur-md':
            type === 'info',
        },
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Tag
