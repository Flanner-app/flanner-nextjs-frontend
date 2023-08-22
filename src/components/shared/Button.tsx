import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  appearence: 'yellow' | 'black' | 'outline' | 'critical' | 'ghost'
  size: 'S' | 'M' | 'L'
  className?: string
  children: ReactNode
  containsIconOnly?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const getClasses = (appearence: ButtonProps['appearence']) => {
  switch (appearence) {
    case 'yellow':
      return 'bg-yellow-regular text-black-regular hover:bg-yellow-hover'
    case 'outline':
      return [
        'bg-transparent border border-black-regular text-black-default',
        'hover:bg-black-hover hover:text-white active:bg-black-regular',
        'active:text-white',
      ]
    case 'black':
      return 'bg-black-regular text-white hover:bg-black-hover active:bg-black-regular'
    case 'critical':
      return [
        'border border-utility-error bg-transparent text-utility-error',
        'hover:bg-utility-error hover:text-white active:bg-utility-error',
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
  children,
  containsIconOnly,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      data-icon-only={containsIconOnly}
      className={clsx(
        'flex items-center justify-center gap-2 rounded-full font-semibold leading-snug',
        'outline-none transition-colors',
        {
          'p-3 text-sm': size === 'S',
          'p-4 text-base data-[icon-only=false]:px-5': size === 'M',
          'p-4.5 text-base data-[icon-only=false]:px-6': size === 'L',
        },
        className,
        getClasses(appearence),
      )}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
