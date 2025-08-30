import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2A0E61" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>
      <body className="bg-[#030014]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
