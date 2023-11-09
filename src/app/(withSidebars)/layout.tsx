// import FridgeSidebar from '@/components/groceries/FridgeSidebar'
import Sidebar from '@/components/shared/Sidebar'

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full">
      <Sidebar />
      {children}
      {/* <FridgeSidebar /> */}
    </div>
  )
}
