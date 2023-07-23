import Link from 'next/link'
import Button from './Button'

const Sidebar = () => {
  return (
    <div className="h-full w-40 border-r border-gray-300 p-4 shadow-sm">
      <Link href="/auth">
        <Button className="w-full">Login</Button>
      </Link>
    </div>
  )
}

export default Sidebar
