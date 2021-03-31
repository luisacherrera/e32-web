import Head from 'next/head'

export default function AppLayout({ children }) {
    return (
    <>
      <Head>
        <title>Trans-disciplinary studio with a «Human centric» approach.</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}