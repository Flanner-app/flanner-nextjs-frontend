import clsx from 'clsx'
import { ReactNode } from 'react'
import { getRandomBgColor } from '@/utils/colors'

type TagProps = {
  children: ReactNode
}

const Tag = ({ children }: TagProps) => {
  return (
    <div
      className={clsx(
        'w-fit rounded-md px-3 py-1.5 text-sm font-medium leading-none',
        getRandomBgColor({ bright: true }),
      )}
    >
      {children}
    </div>
  )
}

export default Tag
