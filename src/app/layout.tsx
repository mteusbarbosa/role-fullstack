import { ReactNode } from 'react'
import './globals.css'
import { Signika } from 'next/font/google'

const signika = Signika({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  variable: '--font-main',
})

export const metadata = {
  title: 'Role',
  description: 'Encontre eventos gratuitos em sua cidade',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${signika.variable} font-main`}>{children}</body>
    </html>
  )
}
