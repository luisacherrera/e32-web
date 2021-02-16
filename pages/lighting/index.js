import { useRouter } from 'next/router'
import styles from './Lighting.module.scss'

export default function Lighting() {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header_logo}>
          <h1 className={styles.title_style} onClick={()=>router.push('/')}>E32</h1>
        </div>
        <div className={styles.address_info_container}>
          <address>
            Nº02 C/Energía, 32 Planta 1<br/>
            08940 Cornellà de Llobregat<br/>
            Barcelona
          </address>
        </div>
        <div className={styles.header_logo__page_variant}>
          <h1 className={styles.title_style}>L</h1>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer__address_container}>
            <h3>Paseo de Gracia</h3>
            <h3>residential Apartments</h3>
          </div>
          <div className={styles.footer__info_container}>
            <h3>Year: July 2015</h3>
            <h3>Location: Barcelona</h3>
            <h3>NºEXP: 123ABC</h3>
          </div>
          <p className={styles.footer_middle} onClick={()=>router.push('/about')}>About</p>
          <ul className={styles.footer_home__navbar}>
            <li onClick={()=>router.push('/architecture')} className={styles.footer_home__navbar_item_noactive}>Architecture</li>
            <li className={styles.footer_home__navbar_item}>Lighting</li>
            <li onClick={()=>router.push('/building')} className={styles.footer_home__navbar_item_noactive}>Building</li>
          </ul>
        </div>
        <div className={styles.horizontal_container}>
          <div className={styles.first_image_container}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant} ${styles.image_item__lighting_variant}`} src="/photos/lighting/Destacada_1.png" /></div>
          <div className={styles.image_item__double_spaced}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/lighting/2.jpg" /></div>
          <div><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/lighting/3.jpg" /></div>
          <div className={styles.image_item__single_spaced}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/lighting/4.jpg" /></div>
          <div><img className={`${styles.image_item} ${styles.image_item__horizontal_variant} ${styles.image_item__lighting_variant}`} src="/photos/lighting/Destacada_2.png" /></div>
        </div>
      </div>
      <div className={styles.footer_about__mobile} onClick={()=>router.push('/about')}>
        <h2 className={styles.footer_about__mobile_claim}>See more</h2>
        <h2>&#x254B;</h2>
      </div>
    </>
  )
}
