import clsx from 'clsx'
import { ReactNode } from 'react'

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  type: 'display' | 'headline' | 'title'
  children: ReactNode
  className?: string
}

const displayClasses = 'leading-tight text-10xl md:text-13xl xl:text-17xl'

const headlineClasses = 'leading-tight text-5xl md:text-6xl xl:text-8xl'

const titleClasses = 'leading-snug text-xl md:text-3xl xl:text-4xl'

const classes = {
  display: displayClasses,
  headline: headlineClasses,
  title: titleClasses,
}

const Heading = ({ as, type, children, className }: HeadingProps) => {
  const Component = as

  return (
    <Component
      className={clsx(
        classes[type],
        className,
        'text-primary-dark font-rubik font-bold',
      )}
    >
      {children}
    </Component>
  )
}

export default Heading
