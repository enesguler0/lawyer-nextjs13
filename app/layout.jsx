import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Head from 'next/head'

export const metadata = {
  title: 'Esas Hukuk',
  description: 'Esas Hukuk Bolu Avukatlık Bürosu',
  keywords: ["Bolu", "Avukat", "Esas Hukuk", "Hukuk","Bolu avukat", "Bolu en iyi avukat", "avukat ceza",],
  icons: [
    { rel: 'icon', url: '/logo.svg' },
  ]

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <Navbar />
        <main>{children} </main>
        
        </body>
    </html>
  )
}
