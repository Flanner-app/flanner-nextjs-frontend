'use client'

import clsx from 'clsx'
import { ChangeEvent, InputHTMLAttributes, useMemo } from 'react'

export type InputProps = {
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
      <span className="mb-2 inline-block font-medium leading-none">
        {label}
      </span>
      <label
        className={clsx(
          'block rounded-xl bg-white transition-colors',
          'flex items-center border-2 border-black-default',
          'box-border h-14 cursor-text px-4',
          'hover:bg-white/75 hover:focus-within:bg-white active:bg-white',
          error && 'border border-utility-error/50',
          className,
        )}
      >
        <input
          type="text"
          className={clsx(
            'block w-full p-0 text-black-default placeholder-black-hover/50',
            'h-full bg-transparent leading-none outline-none focus:ring-0',
            'placeholder:font-medium',
          )}
          inputMode={getInputMode}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          {...inputProps}
        />
      </label>
      {!!error && (
        <span className="pl-2 text-xs text-utility-error">{error}</span>
      )}
    </div>
  )
}

export default Input
