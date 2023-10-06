import './globals.css'
import {Figtree} from 'next/font/google';
const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ['300','400','500','600','700','800','900'],
  variable: "--font-figtree"
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir='rtl' className={`${figtree.variable}`}>
      <body className="flex flex-col min-h-screen font-bold uppercase">
        <header className='bg-gray-200 flex items-center justify-center  h-20'>
          header
        </header>
        <div className="flex-1 flex">
          {children}
        </div>
        <footer className="bg-gray-200 flex items-center justify-center  h-20">
          footer
        </footer>
        </body>
    </html>
  )
}
