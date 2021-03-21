import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { isBrowser } from 'react-device-detect'
import styles from './Home.module.scss'
import { getHomeAboutData } from '../lib/api'

export default function Home({data}) {
  const customFields = data[0].acf

  const blocks = {
    architecture: {
      route: "/architecture",
      title: "A",
      image: customFields.galeria.architecture.url
    },
    building: {
      route: "/building",
      title: "B",
      image: customFields.galeria.building.url
    },
    lighting: {
      route: "/lighting",
      title: "L",
      image: customFields.galeria.lighting.url
    },
  }

  const [currentBlock, updateBlock] = useState(blocks.architecture)

  const setBlock = (block) => {
    updateBlock(blocks[block])
  }

  const router = useRouter()

  useEffect(()=>{
    if (!isBrowser) {
      router.push('/architecture')
    }
  },[])

  return (
    <>
      <div className={currentBlock.title === "L" ? `${styles.container} ${styles.container_lighting}`: (currentBlock.title === "B" ? `${styles.container} ${styles.container_building}` : styles.container)}>
        <div className={styles.header_logo}>
          <h1 className={styles.title_style}>E32</h1>
        </div>
        <p className={styles.intro_text}>
          { customFields.title }
        </p>
        <div className={styles.image_container}>
          <img onClick={()=>router.push(currentBlock.route)} className={currentBlock.title === "L" ? styles.image__lighting_variant : (currentBlock.title === "B" ? styles.image__building_variant : "")} src={currentBlock.image}/>
        </div>
        <address className={styles.address_info_container}>
          Nº02 C/Energía, 32 Planta 1<br/>
          08940 Cornellà de Llobregat<br/>
          Barcelona
        </address>
        <div className={styles.block_sign_container}>
          <h2 className={currentBlock.title === "L" ? `${styles.title_style} ${styles.title_style_lighting}`: styles.title_style}>{currentBlock.title}</h2>
        </div>
        <h3 className={styles.footer_home__address_container}>
            Tlf: 938 326 741 <br/>
            <a href="mailto:info@e32.studio?subject=Request information">info@e32.studio</a>
          </h3>
        <p className={styles.footer_middle} onClick={()=>router.push('/about')}>About</p>
        <ul className={styles.footer_home__navbar}>
          <li onClick={()=>router.push('/architecture')} onMouseEnter={()=>setBlock("architecture")}>Architecture</li>
          <li onClick={()=>router.push('/lighting')} onMouseEnter={()=>setBlock("lighting")}>Lighting</li>
          <li onClick={()=>router.push('/building')} onMouseEnter={()=>setBlock("building")}>Building</li>
        </ul>
      </div>
      <div className={styles.footer_about__mobile} onClick={()=>router.push('/about')}>
        <h2 className={styles.footer_about__mobile_claim}>See more</h2>
        <img onClick={()=>router.push('/about')} src="/cursor/SeeMore.png"/>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const data = await getHomeAboutData()

  return {
    props: {
      data: data
    }
  }
}
