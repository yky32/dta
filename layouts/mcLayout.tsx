import Head from 'next/head'
import { Navbar } from '../components/navbar'
import type { LayoutProps } from '../types/pageWithLayouts'

const McLayout: LayoutProps = ({ children }) => {
  return (
    <div>
      <Head>
        <title>DTA @ MC</title>
        <meta name="description" content="Don't Trust Anyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Navbar/>
        <div className='px-8 py-3 bg-bg-1 h-screen'>
          {children}
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default McLayout