import { useEffect } from "react"
import AppLayout from "../components/AppLayout"
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
  // useEffect(()=>{
  //   window.screen.orientation.lock('portrait')
  //     .then(()=>{
  //       alert('This site is intented for portrait mode')
  //     })
  //     .catch((error)=>{
  //       alert(error)
  //     })
  // }, [])

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}