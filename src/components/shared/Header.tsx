import clsx from 'clsx'

const Header = () => {
  return (
    <div
      className={clsx(
        'fixed top-0 z-20 h-18 w-full bg-yellow-dark px-4 py-4',
        'border-b-2 border-black-regular',
        'sm:px-6',
      )}
    >
      <h1 className="font-rubik text-10xl font-extrabold leading-none">
        Flanner
      </h1>
    </div>
  )
}

export default Header
