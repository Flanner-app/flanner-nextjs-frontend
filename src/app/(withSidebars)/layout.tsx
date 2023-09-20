import Sidebar from '@/components/shared/Sidebar'
import FridgeSidebar from '@/components/groceries/FridgeSidebar'

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full">
      <Sidebar /> {children} <FridgeSidebar />
    </div>
  )
}
