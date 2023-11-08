import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Utilities/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App List',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
