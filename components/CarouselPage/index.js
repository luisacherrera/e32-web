import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { isBrowser } from 'react-device-detect';
import CarouselItem from '../CarouselItem';
import SeeMoreMenu from '../SeeMoreMenu';
import BackButton from '../BackButton';
import styles from './CarouselPage.module.scss';

export default function CarouselPage({
  carousel_data, 
  category
}) {
  const router = useRouter();

  const nextPage = '/lighting' 

  // carousel move values
  const carouselLength = carousel_data.length
  const carouselMove = 7.5 / carouselLength
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
  const [toggleDragIcon, setToggleDragIcon] = useState(false)
  const [canMove, setCanMove] = useState(false)
  const [tabletOverflow, setDeviceType] = useState(null)
  const [navigationMenuVisibility, toggleNavigationMenuVisibility] = useState(false)
  const [listItemIsHighlighted, setListItemHighlight] = useState(true)

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

  const navigateToProject = (el) => {
    router.push('architecture/projects?project=' + el)
  }

  const translateMaxValue = category === 'architecture' ? 95 : 80

  // isBrowser && useInterval(() => {
  //   setTranslate(translate => {
  //       const updatedTranslate = translate >= translateMaxValue ? (handleNavigationToNextPage(), translate + carouselSpeed) : translate < 0 ? 0 : translate + carouselSpeed;

  //       return updatedTranslate;
  //   });

  // }, intervalDelay);

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
      {
        isBrowser && <BackButton category={category}></BackButton>
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
            <h3>{ !navigationMenuVisibility ? itemInformation.title : 'Architecture Projects' }</h3>
          </div>
          {
            !isBrowser 
              && <p onClick={()=>toggleNavigationMenuVisibility(!navigationMenuVisibility)}
                    className={styles.footer__project_see_all__mobile}>See All</p>
          }
          <div className={styles.footer__info_container}>
            <h3>Year: { itemInformation.year }</h3>
            <h3>Location: { itemInformation.location }</h3>
            {/* <h3>NºEXP: { itemInformation.expedient }</h3> */}
          </div>
          <div>
            {          
              isBrowser && <img onClick={()=>toggleNavigationMenuVisibility(!navigationMenuVisibility)}
                     className={styles.footer__see_all} 
                     src={require("../../public/cursor/Cursor_projects.png")} 
                     alt="See all projects"/>
            }
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
                  isBuildingVariant={data.isBuildingVariant}
                  isLandscape={data.isLandscape}
                  isLightingVariant={data.isLightingVariant}
                  isPortrait={data.isPortrait}
                  isMediumLandscape={data.isMediumLandscape}
                  isMediumPortrait={data.isMediumPortrait}
                  isLargePortrait={data.isLargePortrait}
                  isSmallPortrait={data.isSmallPortrait}
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
        <img onClick={()=>router.push('/about')} src={require("../../public/cursor/SeeMore.png")}/>
      </div>

      {
        navigationMenuVisibility ?
          <SeeMoreMenu items={carousel_data}></SeeMoreMenu>
          // <div className={styles.projects_navigation_menu}>
          //   <div className={styles.projects_navigation_menu__image_container}>
          //     <img className={styles.projects_navigation_menu__image__landscape} src={carousel_data[0].image} alt=""/>
          //   </div>
          //   <ul>
          //     { carousel_data
          //         .filter((data, index, self) =>
          //           index === self.findIndex((t) => (
          //             t.project_id === data.project_id && t.title === data.title
          //         ))
          //       ).map((block, i)=>
          //         <li className={i === 0 && listItemIsHighlighted ? styles.highlighted__project : ''}
          //             key={i}
          //             onClick={()=>navigateToProject(block.project_id)}
          //             onMouseOver={()=>setListItemHighlight(false)}
          //             onMouseLeave={()=>setListItemHighlight(true)}>
          //             { 
          //               block.title.toUpperCase()
          //             }
          //         </li>
          //       ) 
          //     }
          //   </ul>
          //   <img className={styles.projects_navigation_menu__close}
          //        onClick={()=>toggleNavigationMenuVisibility(false)} 
          //        src={require("../../public/cursor/SeeMore.png")}/>
          // </div>
          :
          null
      }

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
