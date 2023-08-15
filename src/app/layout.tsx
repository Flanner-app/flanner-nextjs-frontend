import clsx from 'clsx'
import type { Metadata } from 'next'
import { Poppins, Rubik } from 'next/font/google'
import Sidebar from '@/components/shared/Sidebar'
import FridgeSidebar from '@/components/groceries/FridgeSidebar'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
})
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  title: 'Flanner',
  description: 'The Fridge app',
}

export default function RootLayout({
  children,
  loginModal,
}: {
  children: React.ReactNode
  loginModal: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={clsx(
          'h-full bg-yellow-light font-poppins',
          poppins.variable,
          rubik.variable,
        )}
      >
        <div className="flex h-full">
          <Sidebar /> {children} <FridgeSidebar />
        </div>
        {loginModal}
      </body>
    </html>
  )
}
