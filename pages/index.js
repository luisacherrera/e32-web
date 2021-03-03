import Footer from '../components/Footer'
import Image from 'next/image'
import styles from './Home.module.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const blocks = {
    architecture: {
      title: "A",
      image: "/photos/architecture-main.jpg"
    },
    building: {
      title: "B",
      image: "/photos/building-main.jpg"
    },
    lighting: {
      title: "L",
      image: "/photos/lighting-main.png"
    },
  }

  const [currentBlock, updateBlock] = useState(blocks.architecture)

  const setBlock = (block) => {
    updateBlock(blocks[block])
  }

  useEffect(()=>{
    const navigateOnScroll = () => {
      router.push('/architecture')
    }
    window.addEventListener('mousewheel', navigateOnScroll)

    return ()=>{
      window.removeEventListener('mousewheel', navigateOnScroll)
    }
  }, [])

  const router = useRouter()

  return (
    <>
      <div className={currentBlock.title === "L" ? `${styles.container} ${styles.container_lighting}`: (currentBlock.title === "B" ? `${styles.container} ${styles.container_building}` : styles.container)}>
        <div className={styles.header_logo}>
          <h1 className={styles.title_style}>E32</h1>
        </div>
        <p className={styles.intro_text}>E32 is a trans-disciplinary studio that strives to enhance integrated projects with a "Human centric" approach.</p>
        <div className={styles.image_container}>
          <Image onClick={()=>router.push('/architecture')} className={currentBlock.title === "L" ? styles.image__lighting_variant : (currentBlock.title === "B" ? styles.image__building_variant : "")} src={currentBlock.image} width={1920} height={2670} layout="responsive" />
        </div>
        <address className={styles.address_info_container}>
          Nº02 C/Energía, 32 Planta 1<br/>
          08940 Cornellà de Llobregat<br/>
          Barcelona
        </address>
        <div className={styles.block_sign_container}>
          <h2 className={currentBlock.title === "L" ? `${styles.title_style} ${styles.title_style_lighting}`: styles.title_style}>{currentBlock.title}</h2>
        </div>
        <address className={styles.footer_home__address_container}>
          Nº02 C/Energía, 32 Planta 1<br/>
          08940 Cornellà de Llobregat<br/>
          Barcelona
        </address>
        <p className={styles.footer_middle} onClick={()=>router.push('/about')}>About</p>
        <ul className={styles.footer_home__navbar}>
          <li onClick={()=>router.push('/architecture')} onMouseLeave={()=>setBlock("architecture")} onMouseEnter={()=>setBlock("architecture")}>Architecture</li>
          <li onClick={()=>router.push('/lighting')} onMouseLeave={()=>setBlock("architecture")} onMouseEnter={()=>setBlock("lighting")}>Lighting</li>
          <li onClick={()=>router.push('/building')} onMouseLeave={()=>setBlock("architecture")} onMouseEnter={()=>setBlock("building")}>Building</li>
        </ul>
      </div>
      <div className={styles.footer_about__mobile} onClick={()=>router.push('/about')}>
        <h2 className={styles.footer_about__mobile_claim}>See more</h2>
        <img onClick={()=>router.push('/about')} src="/cursor/SeeMore.png"/>
      </div>
    </>
  )
}
