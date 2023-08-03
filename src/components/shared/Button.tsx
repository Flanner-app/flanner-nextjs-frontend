import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  size: 'S' | 'M'
  appearence: 'solid' | 'outline' | 'ghost'
  className?: string
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const getClasses = (appearence: ButtonProps['appearence']) => {
  switch (appearence) {
    case 'solid':
      return ['bg-primary-regular text-white', 'hover:bg-primary-hover']
    case 'outline':
      return [
        'bg-transparent border border-primary-regular text-black',
        'hover:bg-primary-hover hover:text-white',
      ]
    case 'ghost':
      return ['bg-transparent', 'hover:bg-primary-light']
    default:
      return []
  }
}

const Button = ({
  size,
  appearence,
  className,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-2 rounded-xl p-4 font-medium transition-colors',
        { 'p-4': size === 'M', 'p-3': size === 'S' },
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
