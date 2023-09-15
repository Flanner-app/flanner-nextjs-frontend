import clsx from 'clsx'
import { Check } from 'react-feather'

type CheckboxProps = {
  label: string
  isChecked: boolean
  className?: string
  onChange: () => void
}

const Checkbox = ({ label, isChecked, className, onChange }: CheckboxProps) => {
  console.log(label)
  return (
    <label
      className={clsx(
        'group relative flex w-fit cursor-pointer items-center gap-2',
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
          'flex h-5 w-5 items-center justify-center rounded-md shadow-sm',
          'rotate-45 border bg-white transition-shadow',
        )}
      >
        {isChecked && (
          <Check size={14} className="-rotate-45 text-black-default" />
        )}
      </div>
    </label>
  )
}

export default Checkbox
