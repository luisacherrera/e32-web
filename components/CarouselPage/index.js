import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { isBrowser } from 'react-device-detect';
import CarouselItem from '../CarouselItem';
import styles from './CarouselPage.module.scss';

export default function CarouselPage({
  carousel_data, 
  category
}) {
  const router = useRouter();

  const nextPage = category === 'architecture' 
                    ? '/lighting' 
                    : category ==='lighting' 
                    ? '/building' 
                    : '/architecture'


  const containerBuildingVariant = category === 'building' ? styles.container_building : ''
  const containerLightingVariant = category === 'lighting' ? styles.container_lighting : ''
  const footerBuildingVariant = category === 'building' ? styles.footer__building_variant : ''
  const footerLightingVariant = category === 'lighting' ? styles.footer__lighting_variant : ''
  const titleLightingVariant = category === 'lighting' ? styles.header_logo__page_variant__lighting : ''

  const handleNewVisibleItem = (item) => {
    updateItemInformation(item)
  }

  const [itemInformation, updateItemInformation] = useState({
    title: carousel_data[0].title,
    year: carousel_data[0].year,
    location: carousel_data[0].location,
    expedient: carousel_data[0].expedient
  })

  const handleWheel = (evt) => {
    evt.deltaY > 0 ? 
      setTranslate(translate=>{
        const updatedTranslate = translate + 0.1;

        return updatedTranslate;
      })
      :
      setTranslate(translate=>{
        const updatedTranslate = translate - 0.1;
  
        return updatedTranslate;
      })  
  }

  const [translate, setTranslate] = useState(0)
  
  useEffect(() => {
    let timer = setInterval(() => {
        setTranslate(translate => {
            const updatedTranslate = translate >= 85 ? router.push(nextPage) : translate < 0 ? 0 : translate + 0.01;

            return updatedTranslate;
        });

    }, 15);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={`
        ${styles.container}
        ${containerLightingVariant}
        ${containerBuildingVariant}
        `}>
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
        <div className={`
          ${styles.header_logo__page_variant}
          ${titleLightingVariant}
          `}>
          <h1 className={styles.title_style}>{
            category === 'architecture' ? 'A' :
              category === 'building' ? 'B' : 
                'L'
          }</h1>
        </div>
        <div className={`
          ${styles.footer}
          ${footerBuildingVariant}
          ${footerLightingVariant}
        `}>
          <div className={styles.footer__address_container}>
            <h3>{ itemInformation.title }</h3>
          </div>
          <div className={styles.footer__info_container}>
            <h3>Year: { itemInformation.year }</h3>
            <h3>Location: { itemInformation.location }</h3>
            <h3>NºEXP: { itemInformation.expedient }</h3>
          </div>
          <p className={styles.footer_middle} onClick={()=>router.push('/about')}>About</p>
          <ul className={styles.footer_home__navbar}>
            {
              category === 'architecture' ? <li className={styles.footer_home__navbar_item}>Architecture</li>
                : <li onClick={()=>router.push('/architecture')} className={styles.footer_home__navbar_item_noactive}>Architecture</li>
            }
            {
              category === 'lighting' ? <li className={styles.footer_home__navbar_item}>Lighting</li>
                : <li onClick={()=>router.push('/lighting')} className={styles.footer_home__navbar_item_noactive}>Lighting</li>
            }
            {
              category === 'building' ? <li className={styles.footer_home__navbar_item}>Building</li>
                : <li onClick={()=>router.push('/building')} className={styles.footer_home__navbar_item_noactive}>Building</li>
            }
          </ul>
        </div>
        <div className={`${styles.horizontal_container} animation__container`}
             onWheel={(e)=>isBrowser && handleWheel(e)}>
            {
              carousel_data.map((data, i)=>
                <CarouselItem
                  key={i}
                  category={category}
                  isBuildingVariant={i === 2 && category === 'building'}
                  isDoubleSpaced={i === 1 || i === 6}
                  isFirstElement={i === 0}
                  isLandscape={data.isLandscape}
                  isSingleSpaced={i === 3}
                  item={data}
                  onItemVisible={handleNewVisibleItem}>
                </CarouselItem>
              )
            }
        </div>
      </div>
      <div className={styles.footer_about__mobile} onClick={()=>router.push('/about')}>
        <h2 className={styles.footer_about__mobile_claim}>See more</h2>
        <img onClick={()=>router.push('/about')} src="/cursor/SeeMore.png"/>
      </div>

      <style jsx>{`
        .animation__container {
          transform: translateX(-${translate}%);  
        }
      `}</style>
    </>
  )
}