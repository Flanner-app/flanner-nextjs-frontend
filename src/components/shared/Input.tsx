'use client'

import clsx from 'clsx'
import { ChangeEvent, InputHTMLAttributes, useMemo } from 'react'

export type InputProps = {
  label?: string
  placeholder: string
  type?: 'regular' | 'number'
  decimalCount?: number
  error?: string
  value: string
  rows?: number
  className?: string
  wrapperClassName?: string
} & Omit<
  InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
  'value' | 'rows'
>

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
  rows,
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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

  const TextField = rows ? 'textarea' : 'input'

  return (
    <div className={wrapperClassName}>
      {label && (
        <span className="mb-2 inline-block font-medium leading-none">
          {label}
        </span>
      )}
      <label
        className={clsx(
          'block rounded-xl bg-white transition-colors',
          'flex items-center border-2 border-black-default',
          'box-border cursor-text shadow-brutalism',
          'hover:bg-white/75 hover:focus-within:bg-white active:bg-white',
          {
            'h-14 px-4': !rows,
            'p-4': rows,
            'border border-utility-error/50': error,
          },
          className,
        )}
      >
        <TextField
          type="text"
          className={clsx(
            'block w-full p-0 text-black-default placeholder-black-hover/50',
            'h-full bg-transparent leading-none outline-none focus:ring-0',
            'placeholder:font-medium',
            { 'resize-none leading-tight': rows },
          )}
          inputMode={getInputMode}
          placeholder={placeholder}
          rows={rows}
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
