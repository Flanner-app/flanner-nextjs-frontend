import clsx from 'clsx'
import { ReactNode } from 'react'

type ButtonProps = {
  className?: string
  children: ReactNode
}

const Button = ({ className, children, ...restProps }: ButtonProps) => {
  return (
    <button
      className={clsx('rounded-xl bg-violet-600 p-4 text-white', className)}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
