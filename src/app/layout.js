import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from './components/ThemeRegistry/ThemeRegistry'
import Navbar from './Youtubecomponent/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Youtube clone with materialUi',
  description: 'Youtube clone by safique',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <Navbar/>
          <div>
          {children}
          </div>
     
        </ThemeRegistry>
        
        </body>
    </html>
  )
}
