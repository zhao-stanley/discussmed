import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return Component.name === 'Home' ? (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <title>discussmed</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="discussmed" />
        <meta name="theme-color" content="#14BA86" />
        <meta
          name="description"
          content="discussmed is an organization led by high school students that aims to promote scientific and medical knowledge."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://discussmed.org" />
        <meta property="og:title" content="discussmed" />
        <meta
          property="og:description"
          content="discussmed is an organization led by high school students that aims to promote scientific and medical knowledge."
        />
        <meta property="og:image" content="https://discussmed.org/img/preview.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="discussmed.org" />
        <meta property="twitter:title" content="discussmed" />
        <meta
          property="twitter:description"
          content="discussmed is an organization led by high school students that aims to promote scientific and medical knowledge."
        />
        <meta property="twitter:image" content="https://discussmed.org/img/preview.png" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </ThemeProvider>
  ) : (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <title>discussmed</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="discussmed" />
        <meta name="theme-color" content="#14BA86" />
        <meta
          name="description"
          content="discussmed is an organization led by high school students that aims to promote scientific and medical knowledge."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://discussmed.org" />
        <meta property="og:title" content="discussmed" />
        <meta
          property="og:description"
          content="discussmed is an organization led by high school students that aims to promote scientific and medical knowledge."
        />
        <meta property="og:image" content="https://discussmed.org/static/images/preview.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="discussmed.org" />
        <meta property="twitter:title" content="discussmed" />
        <meta
          property="twitter:description"
          content="discussmed is an organization led by high school students that aims to promote scientific and medical knowledge."
        />
        <meta property="twitter:image" content="https://discussmed.org/static/images/preview.png" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
