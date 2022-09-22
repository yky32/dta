import type { LayoutProps } from '../types/pageWithLayouts'
import Head from 'next/head'

const MainLayout: LayoutProps = ({ children }) => {
  return (
    <div>
      <Head>
        <title>DTA - Don't Trust Anyone</title>
        <meta name="description" content="Don't Trust Anyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        {children}
      </main>

      <footer>
      </footer>
    </div>
  )
}
export default MainLayout