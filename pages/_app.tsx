import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import '../styles/globals.css'
import PageWithLayoutType from '../types/pageWithLayouts'
import { RecoilRoot } from 'recoil'

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children: ReactElement) => <>{children}</>)
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
