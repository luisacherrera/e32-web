import styles from './About.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function About() {
  const currentBlock = {
    title: "A",
    image: "/photos/architecture-main.jpg"
  }

  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header_logo}>
          <h1 className={styles.title_style}>E32</h1>
        </div>
        <div className={styles.image_container}>
          <Image src={currentBlock.image} width={1920} height={2670} layout="responsive" />
        </div>
        <div className={styles.block_sign_container}>
          <p onClick={()=>router.back()}>X</p>
          <p className={styles.intro_text}>E32 is a trans-disciplinary studio that strives to enhance integrated projects with a "Human centric" approach.</p>
        </div>
        <div className={styles.address_info_container}>
          <p>Maps</p>
          <address>
            Nº02 C/Energía, 32 Planta 1<br/>
            08940 Cornellà de Llobregat<br/>
            Barcelona
          </address>
        </div>
        <h2 className={styles.footer_home__address_container}>
          Tlf: 938 326 741 <br/>
          info@e32.studio
        </h2>
        <div className={styles.footer_middle}>
          <p>Email us!</p>
          <p>IG</p>
        </div>
        <ul className={styles.footer_home__navbar}>
          <li>Architecture</li>
          <li>Lighting</li>
          <li>Building</li>
        </ul>
      </div>
    </>
  )
}
