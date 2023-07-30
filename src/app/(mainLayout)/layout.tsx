import Sidebar from '@/components/shared/Sidebar'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full">
      <Sidebar /> {children}
    </div>
  )
}

export default MainLayout
