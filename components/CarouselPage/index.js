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


  // carousel move values
  const carouselLength = carousel_data.length
  const carouselMove = 5 / carouselLength
  const carouselSpeed = 0.10 / carouselLength

  // states

  const [itemInformation, updateItemInformation] = useState({
    title: carousel_data[0].title,
    year: carousel_data[0].year,
    location: carousel_data[0].location,
    expedient: carousel_data[0].expedient
  })
  const [translate, setTranslate] = useState(0)

  // styles

  const containerBuildingVariant = category === 'building' ? styles.container_building : ''
  const containerLightingVariant = category === 'lighting' ? styles.container_lighting : ''
  const footerBuildingVariant = category === 'building' ? styles.footer__building_variant : ''
  const footerLightingVariant = category === 'lighting' ? styles.footer__lighting_variant : ''
  const titleLightingVariant = category === 'lighting' ? styles.header_logo__page_variant__lighting : ''

  // DOM events handlers

  const handleWheel = (evt) => {
    if (evt.deltaX === -0 || evt.deltaX === -1.25 || evt.deltaX === 1.25) {
      evt.deltaY > 0 ? 
      setTranslate(translate=>{
        const updatedTranslate = translate + carouselMove;

        return updatedTranslate;
      })
      :
      setTranslate(translate=>{
        const updatedTranslate = translate - carouselMove;
  
        return updatedTranslate;
      })  
    }
  }

  // general handlers

  const handleNewVisibleItem = (item) => {
    updateItemInformation(item)
  }

  const translateMaxValue = category === 'architecture' ? 95 : 80

  useEffect(() => {
    let timer = isBrowser && setInterval(() => {
        setTranslate(translate => {
            const updatedTranslate = translate >= translateMaxValue ? router.push(nextPage) : translate < 0 ? 0 : translate + carouselSpeed;

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
        `}
        onWheel={(e)=>isBrowser && handleWheel(e)}>
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
          <div className={styles.footer__project_title_container}>
            <h3>{ itemInformation.title }</h3>
          </div>
          <div className={styles.footer__info_container}>
            <h3>Year: { itemInformation.year }</h3>
            <h3>Location: { itemInformation.location }</h3>
            {/* <h3>NºEXP: { itemInformation.expedient }</h3> */}
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
        <div className={`${styles.horizontal_container} animation__container`}>
            {
              carousel_data.map((data, i)=>
                <CarouselItem
                  key={i}
                  category={category}
                  isFirstElement={i === 0}
                  isLandscape={data.isLandscape}
                  isLightingVariant={data.isLightingVariant}
                  item={data}
                  onItemVisible={handleNewVisibleItem}>
                </CarouselItem>
              )
            }
        </div>
      </div>
      <div className={`
        ${styles.footer_about__mobile}
        ${footerBuildingVariant}
        ${footerLightingVariant}
      `} onClick={()=>router.push('/about')}>
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
