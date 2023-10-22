'use client'

import clsx from 'clsx'
import { ChangeEvent, InputHTMLAttributes, useMemo } from 'react'

type InputProps = {
  label: string
  placeholder: string
  type?: 'regular' | 'number'
  decimalCount?: number
  error?: string
  value: string
  className?: string
  wrapperClassName?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>

const isNumberStringValid = (str: string, decimalCount = 0) => {
  if (!str) return true
  if (!/^[0-9.-]*$/.test(str)) return false
  if (str.lastIndexOf('-') > 0) return false
  if (decimalCount === 0 && str.lastIndexOf('.') > 0) return false
  if (str.startsWith('.')) return false
  if (str.indexOf('.') > 0 && !/[0-9]\./.test(str)) return false
  if (str.indexOf('.') !== str.lastIndexOf('.')) return false
  if (str.split('.')[1]?.length > decimalCount) return false

  return true
}

const Input = ({
  label,
  placeholder,
  type = 'regular',
  decimalCount = 0,
  error,
  value,
  className,
  wrapperClassName,
  onChange,
  ...inputProps
}: InputProps) => {
  const getInputMode = useMemo(() => {
    if (type === 'number') {
      return 'decimal'
    }
    return 'text'
  }, [type])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (type === 'number') {
      e.target.value = e.target.value.replaceAll(',', '.')

      if (!isNumberStringValid(e.target.value, decimalCount)) {
        return
      }
    }

    onChange?.(e)
  }

  return (
    <div className={wrapperClassName}>
      <label
        className={clsx(
          'block rounded-xl bg-white shadow-sm transition-colors',
          'px-4 py-2 hover:bg-white/75 hover:focus-within:bg-white',
          'min-h-14 active:bg-white',
          'box-border cursor-text',
          error && 'border border-utility-error/50',
          className,
        )}
      >
        <div className="flex h-full flex-col gap-1.5">
          <span className="inline-block text-xs leading-none">{label}</span>
          <input
            type="text"
            className={clsx(
              'block w-full p-0 text-black-default placeholder-black-hover/50',
              'h-5 bg-transparent text-sm leading-none outline-none focus:ring-0',
            )}
            inputMode={getInputMode}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            {...inputProps}
          />
        </div>
      </label>
      {!!error && (
        <span className="pl-2 text-xs text-utility-error">{error}</span>
      )}
    </div>
  )
}

export default Input
