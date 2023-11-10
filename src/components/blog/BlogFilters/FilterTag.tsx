import clsx from 'clsx'
import { ReactNode } from 'react'

type FilterTagProps = {
  isActive: boolean
  onClick: () => void
  children: ReactNode
}

const FilterTag = ({ isActive, onClick, children }: FilterTagProps) => {
  return (
    <div
      className={clsx('group relative w-fit transition-transform', {
        'active:scale-95': isActive,
      })}
      onClick={onClick}
    >
      <div
        className={clsx(
          'rounded-md px-4 py-2 text-sm font-medium leading-none',
          'relative z-[2] cursor-pointer border-2 border-black-default',
          'transition-[opacity,color,bottom,right,background-color] duration-100',
          'whitespace-nowrap',
          {
            'bottom-0 right-0 bg-accent-purple hover:bg-accent-purple/95':
              isActive,
            [clsx(
              'bottom-0.5 right-0.5 bg-yellow-regular group-hover:bottom-0 group-hover:right-0',
              'active:bottom-0 active:right-0 active:bg-yellow-hover',
            )]: !isActive,
          },
        )}
      >
        {children}
      </div>
      <div
        className={clsx(
          'block rounded-md border-2 border-black-default bg-black-default',
          'absolute top-0 z-[1] h-full w-full',
        )}
      ></div>
    </div>
  )
}

export default FilterTag
