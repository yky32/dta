import type { LayoutProps } from '../types/pageWithLayouts'
import Head from 'next/head'
import { Navbar } from '../components/navbar'


const MainLayout: LayoutProps = ({ children }) => {
  return (
    <div>
      <Head>
        <title>DTA - Don't Trust Anyone</title>
        <meta name="description" content="Don't Trust Anyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <section className='space-y-6 px-6 py-6'>
          {children}
        </section>
      </main>

      <footer>
      </footer>
    </div>
  )
}
export default MainLayout