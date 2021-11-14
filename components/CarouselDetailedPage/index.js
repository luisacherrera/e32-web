import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { isBrowser } from 'react-device-detect';
import CarouselDetailedItem from '../CarouselDetailedItem';
import styles from './CarouselDetailedPage.module.scss';

export default function CarouselDetailedPage({
  carousel_data, 
  category
}) {
  const router = useRouter();

  const nextPage = category ==='lighting' 
    ? '/building' 
    : '/architecture'


  // carousel move values
  const carouselLength = carousel_data.length
  const carouselMove = 7.5 / carouselLength
  const carouselSpeed = 0.13 / carouselLength

  // refs
  const fullScreenRef = useRef(null)

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
  const [toggleDragIcon, setToggleDragIcon] = useState(false)
  const [canMove, setCanMove] = useState(false)
  const [tabletOverflow, setDeviceType] = useState(null)
  const [fullScreen, toggleFullscreen] = useState(false)
  const [fullscreenImage, setFullscreenImage] = useState()
  const [fullscreenLandscape, setFullscreenLandscape] = useState(false)

  // styles

  const containerBuildingVariant = category === 'building' ? styles.container_building : ''
  const containerLightingVariant = category === 'lighting' ? styles.container_lighting : ''
  const colorChangeAnimation = pageLeave && category === 'architecture' 
    ? styles.change_color_animation__lighting 
    : pageLeave && category === 'lighting' 
      ? styles.change_color_animation__building 
      : pageLeave && category === 'building'
        ? styles.change_color_animation__architecture
        : ''
  const footerBuildingVariant = category === 'building' ? styles.footer__building_variant : ''
  const footerLightingVariant = category === 'lighting' ? styles.footer__lighting_variant : ''
  const leaveAnimation = pageLeave ? styles.leave_animation : ''
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

  const handleMouseMove = (e) => {
    const xAxis = fullScreenRef.current
    const yAxis = fullScreenRef.current 
    
    xAxis.style.backgroundPositionX = -e.nativeEvent.offsetX + "px"
    yAxis.style.backgroundPositionY = fullscreenLandscape 
                                        ? -(e.nativeEvent.offsetY*1.6) + "px" 
                                        : -(e.nativeEvent.offsetY*4) + "px"
  }

  // general handlers

  const handleFullscreenImage = (image, size) => {
    document.body.style.overflow = 'unset' 

    setFullscreenImage(image)
    setFullscreenLandscape(size)
    setIntervalDelay(150000)
    toggleFullscreen(true)
  }

  const handleFullscreenClose = () => {
    if (isBrowser) {
      document.body.style.overflow = 'hidden'
    }
    toggleFullscreen(false)
    setFullscreenLandscape(false)
    setIntervalDelay(15)
  }

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
    const timeoutDrag = setTimeout(()=>{
      setCanMove(true)
      setToggleDragIcon(true)
    }, 800)
    
    const timeoutOverlay = setTimeout(()=>{
      setShowMobileOverlay(false)
    }, 3900)

    return () => {
      clearTimeout(timeoutDrag)
      clearTimeout(timeoutOverlay)
    }
  }, [])

  return (
    <>
      {
        showMobileOverlay && 
          <div className={styles.overlay_animation__mobile}>
            {
              toggleDragIcon ? 
                <img className={styles.overlay_animation__mobile__moving} 
                src={require("../../public/animation/movimiento.png")} 
                alt="moving"/> 
                :
                <img src={require("../../public/animation/parado.png")} alt="stopped"/> 
            }

            <h2>Drag left to navigate</h2>
          </div>
      }
      <div className={`
        ${styles.container}
        ${containerLightingVariant}
        ${containerBuildingVariant}
        ${colorChangeAnimation}
        ${tabletOverflow}
        `}
        onWheel={(e)=>isBrowser && canMove && handleWheel(e)}>
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
                <CarouselDetailedItem
                  key={i}
                  imageOverlay={showMobileOverlay}
                  isFirstElement={i === 0}
                  isBuildingVariant={data.isBuildingVariant}
                  isLandscape={data.isLandscape}
                  isLightingVariant={data.isLightingVariant}
                  item={data}
                  onItemVisible={handleNewVisibleItem}
                  onFullscreenMode={handleFullscreenImage}
                  >
                </CarouselDetailedItem>
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
        <img onClick={()=>router.push('/about')} src={require("../../public/cursor/SeeMore.png")}/>
      </div>

      {
        fullScreen ? 
          isBrowser ?
            <div ref={fullScreenRef}
                 onMouseMove={(e)=>handleMouseMove(e)}
                 onClick={()=>handleFullscreenClose()} 
                 className="fullscreen_image">
            </div>
            :
            <div className={
              fullscreenLandscape 
                ? `${styles.fullscreen_mobile} ${styles.fullscreen_mobile__landscape}`
                : `${styles.fullscreen_mobile}`}>
              <img onClick={()=>handleFullscreenClose()} 
                   src={require("../../public/cursor/SeeMore.png")} 
                   className={styles.fullscreen_mobile__close}
                   alt="close"/>
              <img src={ fullscreenImage } 
                   alt="full screen image"/>
            </div>
          : 
          null 
      }

      <style jsx>{`
        .animation__container {
          transform: translateX(-${translate}%);  
        }

        .fullscreen_image {
          cursor: url('/cursor/Close.png'), auto;
          background-image: url(${fullscreenImage});
          background-size: 200%;
          background-position: center;
          position: absolute;
          z-index: 100;
          height: 100vh;
          width: 100vw;
          top: 0;
          left: 0;
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
