import Head from 'next/head'

export default function AppLayout({ children }) {
    return (
    <>
      <Head>
        <title>E32</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}