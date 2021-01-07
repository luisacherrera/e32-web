import Footer from '../components/Footer'
import Image from 'next/image'
import styles from './Home.module.scss'
import { useState } from 'react'

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
      image: "/photos/lighting-main.jpg"
    },
  }

  const [currentBlock, updateBlock] = useState(blocks.architecture)

  const setBlock = (block) => {
    updateBlock(blocks[block])
  }

  return (
    <>
      <div className={currentBlock.title === "L" ? `${styles.container} ${styles.container_lighting}`: (currentBlock.title === "B" ? `${styles.container} ${styles.container_building}` : styles.container)}>
          <div className={styles.title_container}>
            <h1 className={styles.title_style}>E32</h1>
            <p className={styles.intro_text}>E32 is a trans-disciplinary studio that strives to enhance integrated projects with a "Human centric" approach.</p>
          </div>
          <div className={currentBlock.title === "L" ? styles.image_container__lighting_variant : styles.image_container}>
            <Image className={currentBlock.title === "L" ? styles.image__lighting_variant : (currentBlock.title === "B" ? styles.image__building_variant : "")} src={currentBlock.image} width={currentBlock.title === "L" ? 2670 : 1920} height={currentBlock.title === "L" ? 1920 : 2670} layout="responsive" />
          </div>
          <div className={styles.address_info_container}>
            <p>Nº02 C/Energía, 32 Planta 1</p>
            <p>08940 Cornellà de Llobregat</p>
            <p>Barcelona</p>
          </div>
          <div className={styles.block_sign_container}>
            <h2 className={currentBlock.title === "L" ? `${styles.title_style} ${styles.title_style_lighting}`: styles.title_style}>{currentBlock.title}</h2>
          </div>
      </div>
      <div className={styles.footer_home}>
        <div className={styles.footer_home__address_container}>
          <p>Nº02 C/Energía, 32 Planta 1</p>
          <p>08940 Cornellà de Llobregat</p>
          <p>Barcelona</p>
        </div>
        <p>About</p>
        <div className={styles.footer_home__navbar}>
          <p onMouseLeave={()=>setBlock("architecture")} onMouseEnter={()=>setBlock("architecture")}>Architecture</p>
          <p onMouseLeave={()=>setBlock("architecture")} onMouseEnter={()=>setBlock("lighting")}>Lighting</p>
          <p onMouseLeave={()=>setBlock("architecture")} onMouseEnter={()=>setBlock("building")}>Building</p>
        </div>
      </div>
    </>
  )
}
