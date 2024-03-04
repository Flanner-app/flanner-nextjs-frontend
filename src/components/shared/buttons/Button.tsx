import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import {
  ButtonProps,
  getClasses,
  getCommonButtonClasses,
  getSizeClasses,
} from './buttonStyles'

const Button = ({
  appearence,
  size,
  className,
  wrapperClassName,
  children,
  containsIconOnly,
  disabled,
  ...restProps
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div
      className={clsx(
        'group',
        { 'pl-1 pt-1': appearence !== 'ghost' },
        wrapperClassName,
      )}
    >
      <button
        className={clsx(
          'relative w-full transition-[filter] disabled:pointer-events-none',
          'outline-none disabled:grayscale',
        )}
        data-icon-only={containsIconOnly}
        disabled={disabled}
        {...restProps}
      >
        <span
          className={clsx(
            getCommonButtonClasses(size, appearence, !!disabled),
            getSizeClasses(size, appearence),
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
                '!bg-white':
                  appearence === 'black' ||
                  appearence === 'critical' ||
                  appearence === 'accent',
                '!rounded-lg': size === 'XS',
              },
            )}
          />
        )}
      </button>
    </div>
  )
}

export default Button
