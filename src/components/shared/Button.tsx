import clsx from 'clsx'
import { ReactNode } from 'react'

type ButtonProps = {
  appearence: 'solid' | 'outline' | 'ghost'
  className?: string
  children: ReactNode
}

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
      return ['bg-transparent', 'hover:bg-primary-hover hover:text-white']
    default:
      return []
  }
}

const Button = ({
  appearence,
  className,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'rounded-xl p-4 font-medium transition-colors',
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
