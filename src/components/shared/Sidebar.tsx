import clsx from 'clsx'
import Link from 'next/link'
import { ChevronsLeft, LogIn, LogOut } from 'react-feather'
import { useAuth } from '@/context/AuthContext'
import Button from './Button'

type SidebarProps = {
  isOpen: boolean
  toggle: () => void
}

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  const { user, logOut } = useAuth()

  return (
    <div
      className={clsx(
        'h-full border-r-2 border-black-regular px-4 py-3 shadow-sm',
        'hidden flex-col justify-between bg-yellow-dark lg:flex',
        'fixed left-0 z-20',
        isOpen ? 'w-64' : 'w-auto',
      )}
    >
      <div
        className={clsx(
          'flex items-center',
          isOpen ? 'justify-between' : 'justify-center',
        )}
      >
        {isOpen && (
          <h1 className="font-rubik text-10xl font-extrabold leading-none">
            Flanner
          </h1>
        )}
        <Button size="S" appearence="ghost" onClick={toggle} containsIconOnly>
          <ChevronsLeft
            size={20}
            className={clsx(
              'transform transition-transform',
              !isOpen && 'rotate-180',
            )}
          />
        </Button>
      </div>
      {user ? (
        <Button
          size="M"
          appearence="black"
          wrapperClassName="w-full"
          containsIconOnly={!isOpen}
          onClick={logOut}
        >
          <LogOut size={20} />
          {isOpen && <>Logout</>}
        </Button>
      ) : (
        <Link href="/quick-auth">
          <Button
            size="M"
            appearence="black"
            wrapperClassName="w-full"
            containsIconOnly={!isOpen}
          >
            <LogIn size={20} />
            {isOpen && <>Login</>}
          </Button>
        </Link>
      )}
    </div>
  )
}

export default Sidebar
