import './globals.css'
import {Figtree} from 'next/font/google';
import localFont from 'next/font/local';
import { Header } from './_components/header/header';
import { Footer } from './_components/footer/footer';
const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ['300','400','500','600','700','800','900'],
  variable: "--font-figtree"
})
const vazirmatn = localFont({
  src:[
    {
      path:'../../public/fonts/vazirmatn/Vazirmatn-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path:'../../public/fonts/vazirmatn/Vazirmatn-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path:'../../public/fonts/vazirmatn/Vazirmatn-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path:'../../public/fonts/vazirmatn/Vazirmatn-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path:'../../public/fonts/vazirmatn/Vazirmatn-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path:'../../public/fonts/vazirmatn/Vazirmatn-Black.woff2',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-vazirmatn'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html dir='rtl' className={`dark ${figtree.variable} ${vazirmatn.variable}`}>
      <body className="min-h-screen grid  grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <div className="flex-1 flex">
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
