import AppLayout from "../components/AppLayout"
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}