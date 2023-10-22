import clsx from 'clsx'
import { Check } from 'react-feather'

type CheckboxProps = {
  label: string
  isChecked: boolean
  className?: string
  onChange: () => void
}

const Checkbox = ({ label, isChecked, className, onChange }: CheckboxProps) => {
  return (
    <label
      className={clsx(
        'group relative flex w-fit cursor-pointer items-center gap-3',
        className,
      )}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="absolute hidden h-0 w-0"
      />
      <div
        className={clsx(
          'flex items-center justify-center rounded-md p-0.5 shadow-sm',
          'rotate-45 border border-black-regular bg-white transition-colors',
          'group-hover:border-black-hover group-hover:bg-white/50',
          { '!border-black-regular !bg-yellow-regular': isChecked },
        )}
      >
        <Check
          size={12}
          className={clsx(
            '-rotate-45 text-black-default opacity-0 transition-opacity duration-75',
            {
              'opacity-100': isChecked,
            },
          )}
        />
      </div>
      <span
        className={clsx(
          'text-base leading-none text-black-regular group-hover:text-black-hover',
          'transition-colors',
        )}
      >
        {label}
      </span>
    </label>
  )
}

export default Checkbox
