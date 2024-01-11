import Header from '@/components/shared/Header'
import Sidebar from '@/components/shared/Sidebar'

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="relative w-full md:pl-21.5">
        <Header />
        {children}
      </div>
      {/* <FridgeSidebar /> */}
    </div>
  )
}
