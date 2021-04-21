import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
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
  const carouselSpeed = 0.13 / carouselLength

  // states

  const [itemInformation, updateItemInformation] = useState({
    title: carousel_data[0].title,
    year: carousel_data[0].year,
    location: carousel_data[0].location,
    expedient: carousel_data[0].expedient
  })
  const [translate, setTranslate] = useState(0)
  const [pageLeave, setPageLeave] = useState(false)
  const [intervalDelay, setIntervalDelay] = useState(15)
  const [showMobileOverlay, setShowMobileOverlay] = useState(true)

  // styles

  const containerBuildingVariant = category === 'building' ? styles.container_building : ''
  const containerLightingVariant = category === 'lighting' ? styles.container_lighting : ''
  const footerBuildingVariant = category === 'building' ? styles.footer__building_variant : ''
  const footerLightingVariant = category === 'lighting' ? styles.footer__lighting_variant : ''
  const titleLightingVariant = category === 'lighting' ? styles.header_logo__page_variant__lighting : ''
  const leaveAnimation = pageLeave ? styles.leave_animation : ''
  const colorChangeAnimation = pageLeave && category === 'architecture' 
    ? styles.change_color_animation__lighting 
    : pageLeave && category === 'lighting' 
      ? styles.change_color_animation__building 
      : pageLeave && category === 'building'
        ? styles.change_color_animation__architecture
        : ''

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
  
  const handleNavigationToNextPage = () => {
    setPageLeave(true)

    isBrowser ?
      setTimeout(()=>{
        router.push(nextPage)
      }, 500)
      :
      router.push(nextPage)
  }

  const translateMaxValue = category === 'architecture' ? 95 : 80

  isBrowser && useInterval(() => {
    setTranslate(translate => {
        const updatedTranslate = translate >= translateMaxValue ? (handleNavigationToNextPage(), translate + carouselSpeed) : translate < 0 ? 0 : translate + carouselSpeed;

        return updatedTranslate;
    });

  }, intervalDelay);

  useEffect(()=>{
    setTimeout(()=>{
      setShowMobileOverlay(false)
    }, 3900)
  }, [])

  return (
    <>
      {
        showMobileOverlay && 
          <div className={styles.overlay_animation__mobile}>
            <img className={styles.overlay_animation__mobile__moving} 
                 src="/animation/movimiento.png" 
                 alt="stopped"/>
            <h2>Drag left to navigate</h2>
          </div>
      }
      <div className={`
        ${styles.container}
        ${containerLightingVariant}
        ${containerBuildingVariant}
        ${colorChangeAnimation}
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
          ${leaveAnimation}
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
          ${colorChangeAnimation}
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
                  imageOverlay={showMobileOverlay}
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

function useInterval (callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
