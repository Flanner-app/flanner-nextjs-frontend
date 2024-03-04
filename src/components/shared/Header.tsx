import clsx from 'clsx'

const Header = () => {
  return (
    <div
      className={clsx(
        'fixed top-0 z-20 w-full bg-yellow-dark px-6 py-4',
        'border-b-2 border-black-regular',
      )}
    >
      <h1 className="font-rubik text-10xl font-extrabold leading-none">
        Flanner
      </h1>
    </div>
  )
}

export default Header
