import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import styles from './architecture_projects.module.scss'

export default function ArchitectureProjects() {
  const router = useRouter();
  const [fullScreen, toggleFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState();
  const setFullscreen = (image) => {
    setFullscreenImage(`/photos/${image}.jpg`)
    toggleFullscreen(!fullScreen)
  }

  return (
    <>
      <div className={styles.container}>
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
          <h2 onClick={()=>router.push('/')} className={styles.footer__title}>E32</h2>
          <p className={styles.footer__project_counter}>1/12</p>
          <h2 onClick={()=>router.push('/architecture')} className={styles.footer__title}>A</h2>
          <p className={styles.footer_middle} onClick={()=>router.push('/about')}>About</p>
          <ul className={styles.footer_home__navbar}>
            <li className={styles.footer_home__navbar_item}>Architecture</li>
            <li onClick={()=>router.push('/lighting')} className={styles.footer_home__navbar_item_noactive}>Lighting</li>
            <li onClick={()=>router.push('/building')} className={styles.footer_home__navbar_item_noactive}>Building</li>
          </ul>
        </div>
        <div className={styles.horizontal_container}>
          <div onClick={()=>setFullscreen('pdg/PDG_1')} className={styles.first_image_container}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/pdg/PDG_1.jpg" /></div>
          <div onClick={()=>setFullscreen('pdg/PDG_2')}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/pdg/PDG_2.jpg" /></div>
          <div onClick={()=>setFullscreen('pdg/PDG_3')}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/pdg/PDG_3.jpg" /></div>
          <div onClick={()=>setFullscreen('pdg/PDG_4')}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/pdg/PDG_4.jpg" /></div>
          <div onClick={()=>setFullscreen('pdg/PDG_5')}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/pdg/PDG_5.jpg" /></div>
          <div onClick={()=>setFullscreen('pdg/PDG_6')}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/pdg/PDG_6.jpg" /></div>
          <div onClick={()=>setFullscreen('pdg/PDG_7')}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/pdg/PDG_7.jpg" /></div>
          <div onClick={()=>setFullscreen('pdg/PDG_8')}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/pdg/PDG_8.jpg" /></div>
          <div onClick={()=>setFullscreen('pdg/PDG_9')}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/pdg/PDG_9.jpg" /></div>
          <div onClick={()=>setFullscreen('pdg/PDG_10')}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/pdg/PDG_10.jpg" /></div>
          <div className={styles.project_info_container}>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies auctor nulla, et mollis augue viverra sit amet. Curabitur bibendum, enim eget consectetur volutpat, est elit tempus arcu, suscipit placerat enim quam lobortis ligula. Morbi egestas libero laoreet massa pellentesque fermentum. Vestibulum sed tempor lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas, lorem quis iaculis dignissim, risus magna ullamcorper turpis, vel porttitor risus tortor id massa. Sed ante sapien, euismod id erat nec, varius luctus nunc. Mauris et sollicitudin tortor. Phasellus luctus nisi augue, vel fermentum dolor viverra vel. Quisque lacinia mi a mi molestie fermentum. Proin nulla purus, efficitur vitae urna nec, eleifend vehicula ipsum. Proin malesuada est eu convallis hendrerit.</p>
            <h3>Year: July 2015</h3>
            <h3>Location: Barcelona</h3>
          </div>
          <div onClick={()=>setFullscreen('mallorca/Mallorca_1')}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/mallorca/Mallorca_1.jpg" /></div>
          <div onClick={()=>setFullscreen('mallorca/Mallorca_2')}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/mallorca/Mallorca_2.jpg" /></div>
          <div onClick={()=>setFullscreen('mallorca/Mallorca_3')}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/mallorca/Mallorca_3.jpg" /></div>
          <div onClick={()=>setFullscreen('mallorca/Mallorca_4')}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/mallorca/Mallorca_4.jpg" /></div>
          <div onClick={()=>setFullscreen('mallorca/Mallorca_5')}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/mallorca/Mallorca_5.jpg" /></div>
          <div onClick={()=>setFullscreen('mallorca/Mallorca_6')}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/mallorca/Mallorca_6.jpg" /></div>
          <div className={styles.project_info_container}>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies auctor nulla, et mollis augue viverra sit amet.</p>
            <h3>Year: August 2015</h3>
            <h3>Location: Barcelona</h3>
          </div>
          <div onClick={()=>setFullscreen('cerdanya/Cerdanya_1')}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/cerdanya/Cerdanya_1.jpg" /></div>
          <div onClick={()=>setFullscreen('cerdanya/Cerdanya_2')}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/cerdanya/Cerdanya_3.jpg" /></div>
          <div onClick={()=>setFullscreen('cerdanya/Cerdanya_3')}><img className={`${styles.image_item} ${styles.image_item__horizontal_variant}`} src="/photos/cerdanya/Cerdanya_5.jpg" /></div>
          <div onClick={()=>setFullscreen('cerdanya/Cerdanya_4')}><img className={`${styles.image_item} ${styles.image_item__vertical_variant}`} src="/photos/cerdanya/Cerdanya_6.jpg" /></div>
          <div className={styles.project_info_container}>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies auctor nulla, et mollis augue viverra sit amet. Curabitur bibendum, enim eget consectetur volutpat, est elit tempus arcu, suscipit placerat enim quam lobortis ligula.</p>
            <h3>Year: December 2015
            </h3>
            <h3>Location: Cerdanya</h3>
          </div>
        </div>
      </div>
      { fullScreen ? <div onClick={()=>{setFullscreen()}} className={styles.image_container_fullscreen_mode}><img src={fullscreenImage}/></div>: null }
    </>
  )
}
