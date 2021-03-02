import { useEffect } from "react"
import AppLayout from "../components/AppLayout"
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
  // useEffect(()=>{
  //   window.screen.orientation.lock('portrait')
  // })

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}