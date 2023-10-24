import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  appearence: 'yellow' | 'black' | 'white' | 'outline' | 'critical' | 'ghost'
  size: 'S' | 'M' | 'L'
  className?: string
  wrapperClassName?: string
  children: ReactNode
  containsIconOnly?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const getClasses = (appearence: ButtonProps['appearence']) => {
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
    case 'black':
      return 'bg-black-regular text-white active:bg-black-hover'
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
        'hover:text-white active:bg-black-regular active:text-white',
      ]
    default:
      return ''
  }
}

const Button = ({
  appearence,
  size,
  className,
  wrapperClassName,
  children,
  containsIconOnly,
  disabled,
  ...restProps
}: ButtonProps) => {
  const sizeMap = {
    S: 'h-10',
    M: 'h-12',
    L: 'h-14',
  }

  return (
    <button
      className={clsx(
        'group relative transition-[filter] disabled:pointer-events-none disabled:grayscale',
        wrapperClassName,
      )}
      data-icon-only={containsIconOnly}
      disabled={disabled}
      {...restProps}
    >
      <span
        className={clsx(
          'flex items-center justify-center gap-2 rounded-xl font-semibold leading-none',
          'outline-none transition-[opacity,color,bottom,right,background-color] duration-100',
          'relative z-[2]',
          {
            [clsx(
              'bottom-1 right-1 group-hover:bottom-0 group-hover:right-0',
              'active:bottom-0 active:right-0',
            )]: appearence !== 'ghost',
            'border-2 bg-yellow-regular !text-black-default': disabled,
            'aspect-square p-2.5 text-sm': size === 'S',
            'p-3.5 text-sm data-[icon-only=false]:!px-4': size === 'M',
            'p-4 text-base data-[icon-only=false]:px-6': size === 'L',
          },
          sizeMap[size],
          className,
          getClasses(appearence),
        )}
      >
        {children}
      </span>
      {appearence !== 'ghost' && (
        <span
          className={clsx(
            'block rounded-xl border-2 border-black-default bg-black-default',
            'absolute top-0 z-[1] h-full w-full',
            {
              '!bg-white': appearence === 'black' || appearence === 'critical',
            },
          )}
        />
      )}
    </button>
  )
}

export default Button
