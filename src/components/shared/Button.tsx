import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  appearence: 'yellow' | 'black' | 'outline' | 'ghost'
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
  className,
  children,
  containsIconOnly,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-2 rounded-full font-semibold leading-snug',
        'py-3 transition-colors',
        { 'px-3': containsIconOnly, 'px-4': !containsIconOnly },
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
