import clsx from 'clsx'

type InputProps = {
  label?: string
  className?: string
}

const Input = ({ label, className, ...restProps }: InputProps) => {
  return (
    <label
      className={clsx(
        'rounded-xl border border-gray-300 bg-white p-4',
        'border border-gray-300 text-gray-900',
        className,
      )}
    >
      <span className="mb-1 inline-block text-xs text-gray-900">{label}</span>
      <input type="text" {...restProps} />
    </label>
  )
}
export default Input
