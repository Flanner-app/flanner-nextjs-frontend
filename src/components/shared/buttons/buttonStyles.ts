import clsx from 'clsx'
import { ReactNode } from 'react'

export type ButtonProps = {
  appearence:
    | 'yellow'
    | 'accent'
    | 'black'
    | 'white'
    | 'outline'
    | 'critical'
    | 'ghost'
  size: 'XS' | 'S' | 'M' | 'L'
  className?: string
  wrapperClassName?: string
  children: ReactNode
  containsIconOnly?: boolean
}

const sizeMap = {
  XS: 'min-h-6',
  S: 'min-h-10',
  M: 'min-h-12',
  L: 'min-h-14',
}

export const getCommonButtonClasses = (
  size: ButtonProps['size'],
  appearence: ButtonProps['appearence'],
  disabled?: boolean,
) => {
  return clsx(
    'flex items-center justify-center gap-2 rounded-xl font-semibold leading-none',
    'outline-none transition-[opacity,color,bottom,right,background-color] duration-100',
    'relative z-[2]',
    {
      [clsx(
        'bottom-1 right-1 group-hover:bottom-0 group-hover:right-0',
        'active:bottom-0 active:right-0',
      )]: appearence !== 'ghost' && size !== 'XS',
      'border-2 bg-yellow-regular !text-black-default': disabled,
    },
    sizeMap[size],
  )
}

export const getClasses = (appearence: ButtonProps['appearence']) => {
  switch (appearence) {
    case 'yellow':
      return [
        'bg-yellow-regular text-black-regular',
        'border-2 border-black-regular',
        'active:bg-yellow-hover focus:active:bg-yellow-hover',
      ]
    // case 'outline':
    //   return [
    //     'bg-transparent border-2 border-black-regular text-black-default',
    //     'hover:bg-black-hover hover:border-black-hover hover:text-white active:bg-black-regular',
    //     'active:text-white',
    //   ]
    case 'accent':
      return [
        'bg-accent-green text-black active:bg-accent-green/80',
        'border-2 border-black-regular',
      ]
    case 'black':
      return [
        'bg-black-regular text-white active:bg-black-hover',
        'border-2 border-black-regular',
      ]
    case 'white':
      return 'bg-white text-black-regular border-2 border-black-regular'
    case 'critical':
      return [
        'border-2 border-black-default bg-utility-error text-white',
        'hover:bg-utility-error hover:text-white active:bg-utility-error/80',
      ]
    case 'ghost':
      return [
        'bg-transparent text-black-regular hover:bg-black-hover',
        'border-2 border-transparent',
        'hover:text-white active:bg-black-regular active:text-white',
      ]
    default:
      return ''
  }
}

export const getSizeClasses = (
  size: ButtonProps['size'],
  appearence: ButtonProps['appearence'],
) => {
  switch (size) {
    case 'XS': {
      if (appearence !== 'ghost') {
        return clsx(
          'bottom-0.5 right-0.5 group-hover:bottom-0 group-hover:right-0',
          '!rounded-lg p-1.5 text-xs active:bottom-0 active:right-0',
        )
      }
      return ''
    }
    case 'S': {
      return 'aspect-square p-2.5 text-sm'
    }
    case 'M': {
      return 'p-3.5 text-sm data-[icon-only=false]:!px-4'
    }
    case 'L': {
      return 'p-4 text-base data-[icon-only=false]:px-6'
    }
    default:
      return ''
  }
}
