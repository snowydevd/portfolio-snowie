import './globals.css'
import { Inter, Amatic_SC, Syne} from 'next/font/google'
import SideNavBar from './components/SideNavBar'

const inter = Inter({ subsets: ['latin'] })

const amatic = Amatic_SC(
  {
    weight: '400',
    subsets:['latin']
  }
)

const syne = Syne(
  {
    weight: '500',
    subsets:['latin']
  }
)


export const metadata = {
  title: 'Lautaro Chini',
  description: 'Software Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script>document.documentElement.classList.add(`js`)</script>
      </head> 
      <body className={`flex flex-col lg:flex-row h-full ${syne.className}`}>
        <SideNavBar/>
        {children}
        
        <script src="node_modules/keen-slider/keen-slider.js"></script>
        </body>
    </html>
  )
}
