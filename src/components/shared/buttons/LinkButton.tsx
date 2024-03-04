import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import {
  ButtonProps,
  getClasses,
  getCommonButtonClasses,
  getSizeClasses,
} from './buttonStyles'

export const LinkButton = ({
  href,
  appearence,
  size,
  className,
  wrapperClassName,
  children,
  containsIconOnly,
  ...restProps
}: ButtonProps & LinkProps) => {
  return (
    <div
      className={clsx(
        'group',
        { 'pl-1 pt-1': appearence !== 'ghost' },
        wrapperClassName,
      )}
    >
      <Link
        href={href}
        className={clsx(
          'relative w-full transition-[filter] disabled:pointer-events-none',
          'outline-none disabled:grayscale',
        )}
        data-icon-only={containsIconOnly}
        {...restProps}
      >
        <span
          className={clsx(
            getCommonButtonClasses(size, appearence),
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
      </Link>
    </div>
  )
}
