import { useRouter } from 'next/router'
import styles from './Architecture.module.scss'

export default function Architecture() {
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
          <h1 className={styles.title_style}>A</h1>
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
            <li className={styles.footer_home__navbar_item}>Architecture</li>
            <li onClick={()=>router.push('/lighting')} className={styles.footer_home__navbar_item_noactive}>Lighting</li>
            <li onClick={()=>router.push('/building')} className={styles.footer_home__navbar_item_noactive}>Building</li>
          </ul>
        </div>
        <div className={styles.horizontal_container}>
          <div onClick={()=>{router.push('/architecture/projects')}} className={styles.first_image_container}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/architecture/1.jpg" /></div>
          <div onClick={()=>{router.push('/architecture/projects')}} className={styles.image_item__double_spaced}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/architecture/2.jpg" /></div>
          <div onClick={()=>{router.push('/architecture/projects')}}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/architecture/3.jpg" /></div>
          <div onClick={()=>{router.push('/architecture/projects')}} className={styles.image_item__single_spaced}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/architecture/4.jpg" /></div>
          <div onClick={()=>{router.push('/architecture/projects')}}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/architecture/5.jpg" /></div>
          <div onClick={()=>{router.push('/architecture/projects')}}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/architecture/6.jpg" /></div>
          <div onClick={()=>{router.push('/architecture/projects')}} className={styles.image_item__double_spaced}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/architecture/7.jpg" /></div>
          <div onClick={()=>{router.push('/architecture/projects')}}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/architecture/8.jpg" /></div>
          <div onClick={()=>{router.push('/architecture/projects')}}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/architecture/9.jpg" /></div>
          <div onClick={()=>{router.push('/architecture/projects')}}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/architecture/10.jpg" /></div>
          <div onClick={()=>{router.push('/architecture/projects')}}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/architecture/11.jpg" /></div>
        </div>
      </div>
      <div className={styles.footer_about__mobile} onClick={()=>router.push('/about')}>
        <h2 className={styles.footer_about__mobile_claim}>See more</h2>
        <h2>&#x254B;</h2>
      </div>
    </>
  )
}
