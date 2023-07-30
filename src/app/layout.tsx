import clsx from 'clsx'
import type { Metadata } from 'next'
import { Heebo, Archivo_Black as Archivo } from 'next/font/google'

import './globals.css'

const heebo = Heebo({ subsets: ['latin'], variable: '--font-heebo' })
const archivoBlack = Archivo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: 'Flanner',
  description: 'The Fridge app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={clsx(
          'h-full bg-yellow font-heebo',
          heebo.variable,
          archivoBlack.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
