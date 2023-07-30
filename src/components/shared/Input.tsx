import clsx from 'clsx'

type InputProps = {
  label?: string
  placeholder?: string
  className?: string
}

const Input = ({ label, placeholder, className, ...restProps }: InputProps) => {
  return (
    <label
      className={clsx(
        'flex flex-col rounded-xl border border-gray-300 bg-white p-4',
        'text-black border border-gray-300',
        className,
      )}
    >
      <span className="text-blackgray-900 mb-1 inline-block text-xs">
        {label}
      </span>
      <input
        type="text"
        className="text-sm outline-none"
        placeholder={placeholder}
        {...restProps}
      />
    </label>
  )
}
export default Input
