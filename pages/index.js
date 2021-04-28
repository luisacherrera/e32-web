import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { isBrowser } from 'react-device-detect'
import styles from './Home.module.scss'

export default function Home() {
  const blocks = {
    architecture: {
      route: "/architecture",
      title: "A",
      image: "/photos/projects_architecture/Home_Architecture.jpg",
      name: "architecture"
    },
    building: {
      route: "/building",
      title: "B",
      image: "/photos/shapes/building_home.png",
      name: "building"
    },
    lighting: {
      route: "/lighting",
      title: "L",
      image: "/photos/shapes/lighting_home.png",
      name: "lighting"
    },
  }

  const [currentBlock, updateBlock] = useState(blocks.architecture)
  const [translationAnimation, setTranslationAnimation] = useState(null)

  const lightingVariant = currentBlock.name === "lighting" ? styles.container_lighting : ""
  const buildingVariant = currentBlock.name === "building" ? styles.container_building : ""

  const setBlock = (block) => {
    updateBlock(blocks[block])
  }

  const router = useRouter()

  const handleSetBlock = (newBlock) => {
    if (currentBlock.name === "architecture") {
      newBlock === "lighting" 
        ? setTranslationAnimation(styles.architectureToLighting) 
        : newBlock === "building"
          ? setTranslationAnimation(styles.architectureToBuilding)
          : setTranslationAnimation("")
    } else if (currentBlock.name === "lighting") {
      newBlock === "architecture" 
      ? setTranslationAnimation(styles.lightingToArchitecture) 
      : newBlock === "building"
        ? setTranslationAnimation(styles.lightingToBuilding)
        : setTranslationAnimation("")
    } else if (currentBlock.name === "building") {
      newBlock === "architecture" 
      ? setTranslationAnimation(styles.buildingToArchitecture) 
      : newBlock === "lighting"
        ? setTranslationAnimation(styles.buildingToLighting)
        : setTranslationAnimation("")
    } 

    setBlock(newBlock)
  }

  useEffect(()=>{
    if (!isBrowser) {
      router.push('/architecture')
    }
  },[])

  return (
    <>
      <div className={`
        ${styles.container}
        ${lightingVariant}
        ${buildingVariant}
        ${translationAnimation}
      `}>
        <div className={styles.header_logo}>
          <h1 className={styles.title_style}>E32</h1>
        </div>
        <p className={styles.intro_text}>E32 is a trans-disciplinary studio that strives to enhance integrated projects with a «Human centric» approach.</p>
        <div className={styles.image_container}>
          <img onClick={()=>router.push(currentBlock.route)} className={currentBlock.name === "architecture" ? "" : styles.image__hidden } src={blocks['architecture'].image}/>
          <img onClick={()=>router.push(currentBlock.route)} className={currentBlock.name === "lighting" ? styles.image__lighting_variant : styles.image__hidden} src={blocks['lighting'].image}/>
          <img onClick={()=>router.push(currentBlock.route)} className={currentBlock.name === "building" ? styles.image__building_variant : styles.image__hidden} src={blocks['building'].image}/>
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
          <li className={currentBlock.name === "architecture" ? "" : styles.footer_home__navbar_inactive} onClick={()=>router.push('/architecture')} onMouseEnter={()=>handleSetBlock("architecture")}>Architecture</li>
          <li className={currentBlock.name === "lighting" ? "" : styles.footer_home__navbar_inactive} onClick={()=>router.push('/lighting')} onMouseEnter={()=>handleSetBlock("lighting")}>Lighting</li>
          <li className={currentBlock.name === "building" ? "" : styles.footer_home__navbar_inactive} onClick={()=>router.push('/building')} onMouseEnter={()=>handleSetBlock("building")}>Building</li>
        </ul>
      </div>
      <div className={styles.footer_about__mobile} onClick={()=>router.push('/about')}>
        <h2 className={styles.footer_about__mobile_claim}>See more</h2>
        <img onClick={()=>router.push('/about')} src="/cursor/SeeMore.png"/>
      </div>
    </>
  )
}
