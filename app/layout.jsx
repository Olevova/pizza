'use client'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import {Provider} from 'react-redux'
import store from '@/redux/store'
const poppinsFont = Poppins({ subsets: ['latin'], weight: ['400'], })


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppinsFont.className} h-[100%]`}>
      <body className='flex-col'>
      <Provider store={store} >
      <div className='min-h-[100%] flex flex-col'>
      <Header />
      {children}
      <Footer />
      </div>
      </Provider>
      </body>
    </html>
  )
}
