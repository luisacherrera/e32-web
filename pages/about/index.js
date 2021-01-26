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
        <div className={styles.closing_button}>
          <p onClick={()=>router.back()}>X</p>
        </div>
        <div className={styles.address_info_container}>
          <p>Maps</p>
          <address>
            Nº02 C/Energía, 32 Planta 1<br/>
            08940 Cornellà de Llobregat<br/>
            Barcelona
          </address>
        </div>
        <div className={styles.footer}>
          <h2 className={styles.footer_home__address_container}>
            Tlf: 938 326 741 <br/>
            info@e32.studio
          </h2>
          <p>Email us!</p>
          <p>IG</p>
          <ul className={styles.footer_home__navbar}>
            <li>Architecture</li>
            <li>Lighting</li>
            <li>Building</li>
          </ul>
        </div>
        <div className={styles.horizontal_container}>
          <div className={styles.horizontal_block_container}>
            <div className={styles.image_block}>
              <Image src={currentBlock.image} width={1920} height={2670} layout="responsive" />
            </div>
            <div className={styles.block_sign_container}>
              <p className={styles.intro_text}>E32 is a trans-disciplinary studio that strives to enhance integrated projects with a "Human centric" approach.</p>
            </div>
          </div>
          <div className={styles.horizontal_block_container}>
            <div className={styles.contact_block}>
              <h2>Need some<br/>info? Keep in<br/>touch!</h2>
            </div>
          </div>
          <div className={styles.horizontal_block_container}>
            <div className={styles.contact_form}>
              <div>
                <div className={styles.contact_form_input}>
                  <p>Your Email:</p><input type="text"/>
                </div>
                <div className={styles.contact_form_input}>
                  <p>Subject:</p><input type="text"/>
                </div>
                <div className={styles.contact_form_input}>
                  <p>Your text here...</p><textarea cols="30" rows="20"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
