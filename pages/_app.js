import { Inter } from 'next/font/google'

import Head from 'components/head'
import 'styles/app.css'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
