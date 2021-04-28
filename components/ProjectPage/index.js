import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { isBrowser } from 'react-device-detect'
import ProjectBlock from '../ProjectBlock'
import styles from './ProjectPage.module.scss'

export default function ProjectPage({project_items, category}) {
  const router = useRouter()

  const nextPage = category === 'architecture' 
    ? '/lighting' 
    : category ==='lighting' 
    ? '/building' 
    : '/architecture'

  const footerLightingVariant = category === "lighting" ? styles.footer__title__lighting_variant : ''

  const projectsLength = project_items.reduce((acc,val)=> acc + val.data.length, 0)
  const projectsMove = 5 / projectsLength
  const projectsSpeed = 0.10 / projectsLength
  const projectFraction = 95 / project_items.length

  // refs

  const containerRef = useRef(null)
  const fullScreenRef = useRef(null)

  // states

  const [fullScreen, toggleFullscreen] = useState(false)
  const [fullscreenImage, setFullscreenImage] = useState()
  const [fullscreenLandscape, setFullscreenLandscape] = useState(false)
  const [extraFullscreenLandscape, setExtraFullscreenLandscape] = useState(false)
  const [hasBeenCalled, setCallStatus] = useState(true)
  const [navigationMenuVisibility, toggleNavigationMenuVisibility] = useState(false)
  const [projectInformation, updateProjectInformation] = useState({
    title: project_items[0].data[0].title,
    year: project_items[0].data[0].year,
    location: project_items[0].data[0].location,
    expedient: project_items[0].data[0].expedient,
    id: 1
  })
  const [selectedElement, setSelectedElement] = useState(0)
  const [translate, setTranslate] = useState(0)
  const [showSeeAll, setSeeAllVisibility] = useState(false)
  const [intervalDelay, setIntervalDelay] = useState(15)
  const [listItemIsHighlighted, setListItemHighlight] = useState(true)

  //DOM events handlers

  const handleFullscreenClose = () => {
    if (isBrowser) {
      document.body.style.overflow = 'hidden'
    }
    toggleFullscreen(false)
    setFullscreenLandscape(false)
    setExtraFullscreenLandscape(false)
    setIntervalDelay(15)
  }

  const handleWheel = (evt) => {
    if (evt.deltaX === -0 || evt.deltaX === -1.25 || evt.deltaX === 1.25) {
      evt.deltaY > 0 ? 
        setTranslate(translate=>{
          const updatedTranslate = translate + projectsMove;

          return updatedTranslate;
        })
        :
        setTranslate(translate=>{
          const updatedTranslate = translate - projectsMove;
        
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
                                        : extraFullscreenLandscape 
                                          ? -(e.nativeEvent.offsetY*0.31) + "px"
                                          : -(e.nativeEvent.offsetY*4) + "px"
  }

  const setElementToCall = (el) => {
    if (!hasBeenCalled) {
      setCallStatus(true)
    }
    if (isBrowser) {
      el === 1 ? setTranslate(0) : setTranslate((el-1)*projectFraction)
    }
    updateProjectInformation({
      title: project_items[el - 1].data[0].title,
      year: project_items[el - 1].data[0].year,
      location: project_items[el - 1].data[0].location,
      expedient: project_items[el - 1].data[0].expedient,
      id: el
    })
    toggleNavigationMenuVisibility(false)
    setSelectedElement(el)
    setTimeout(()=>{
      setCallStatus(false)
    }, 1000)
  }

  // prop functions handlers

  const handleFullscreenImage = (image, size, extraSize) => {
    document.body.style.overflow = 'unset' 
    setFullscreenImage(image)
    setFullscreenLandscape(size)
    setExtraFullscreenLandscape(extraSize)
    setIntervalDelay(150000)
    toggleFullscreen(true)
  }

  const handleNewItemInformation = (information) => {
    updateProjectInformation(information)
  }

  // on page load actions
  
  isBrowser && useInterval(() => {
    setTranslate(translate => {
      const updatedTranslate = translate >= 95 ? router.push(nextPage) : translate < 0 ? 0 : translate + projectsSpeed;
      
      return updatedTranslate;
    });
  
  }, intervalDelay);

  return (
    <>
      <div ref={containerRef} className={styles.container} onWheel={(e)=>isBrowser && handleWheel(e)}>
        <div className={styles.footer}>
          <div className={styles.footer__project_data}>
            <div className={styles.footer__project_data__title_container}>
              {
                navigationMenuVisibility 
                  ? <h3>{category[0].toUpperCase() + category.slice(1).toLowerCase()} Projects</h3>
                  : <h3>{projectInformation.title}</h3>
              }
            </div>
            <div className={styles.footer__project_data__info_container}>
              <h3>Year: {projectInformation.year}</h3>
              <h3>Location: {projectInformation.location}</h3>
              {/* <h3>NºEXP: {projectInformation.expedient}</h3> */}
            </div>
          </div>
          <h2 onClick={()=>router.push('/')} className={styles.footer__title}>E32</h2>
          <div className={styles.footer__project_counter_block}>
          {          
            !showSeeAll && 
              <p onClick={()=>toggleNavigationMenuVisibility(!navigationMenuVisibility)}
                 className={styles.footer__project_counter}
                 onMouseOver={()=>isBrowser && setSeeAllVisibility(true)}>
                { projectInformation.id < 10 
                    ? `0${projectInformation.id}` 
                    : projectInformation.id }/{ project_items.length < 10 
                      ? `0${project_items.length}` 
                      : project_items.length
                }
              </p>
          }
          {
            isBrowser && showSeeAll && 
              <img onClick={()=>toggleNavigationMenuVisibility(!navigationMenuVisibility)}
                   onMouseOut={()=>setSeeAllVisibility(false)}
                   className={styles.footer__see_all} 
                   src="/cursor/Cursor_projects.png" 
                   alt="See all projects"/>
          }
          </div>
          <h2 onClick={()=>{
            category === 'architecture' ? router.push('/architecture') : 
              category === 'lighting' ? router.push('/lighting') : 
                router.push('/building')
            }
              } className={`${styles.footer__title} ${footerLightingVariant}`}>{
                category === 'architecture' ? 'A' :
                  category === 'lighting' ? 'L' :
                    'B'
              }</h2>
          <p className={styles.footer__about} onClick={()=>router.push('/about')}>About</p>
          <img className={styles.footer__about__mobile} onClick={()=>router.push('/about')} src="/cursor/SeeMore.png"/>
          <ul className={styles.footer_home__navbar}>
            {
              category === 'architecture' ? 
                <li onClick={()=>router.push('/architecture')} className={styles.footer_home__navbar_item}>Architecture</li> :
                <li onClick={()=>router.push('/architecture')} className={styles.footer_home__navbar_item_noactive}>Architecture</li>
            }
            {
              category === 'lighting' ?
                <li onClick={()=>router.push('/lighting')} className={styles.footer_home__navbar_item}>Lighting</li> :
                <li onClick={()=>router.push('/lighting')} className={styles.footer_home__navbar_item_noactive}>Lighting</li>

            }
            {
              category === 'building' ? 
                <li onClick={()=>router.push('/building')} className={styles.footer_home__navbar_item}>Building</li> :
                <li onClick={()=>router.push('/building')} className={styles.footer_home__navbar_item_noactive}>Building</li>
            }
          </ul>
        </div>
        <div className={`projects_blocks__container ${styles.projects_blocks__container_mobile}`}>
        {
          project_items.map((block, i)=>
            <ProjectBlock key={block.projectId}
                          callToView={selectedElement}
                          canScrollIntoView={hasBeenCalled}
                          isFirstElement={ i === 0 }
                          project_data={block.data}
                          project_description={block.projectDescription}
                          project_id={block.projectId}
                          project_position={i+1}
                          showFullscreenImage={handleFullscreenImage}
                          total_project_length={project_items.length}
                          updateItemInformation={handleNewItemInformation}
                          callProjectToView={setElementToCall}>
            </ProjectBlock>
          )
        }
        </div>
        {
          navigationMenuVisibility ?
            <div className={styles.projects_navigation_menu}>
              <div className={styles.projects_navigation_menu__image_container}>
                {
                  project_items[projectInformation.id - 1].data[0].isLandscape
                    ? <img className={styles.projects_navigation_menu__image__landscape} src={project_items[projectInformation.id - 1].data[0].image} alt=""/>
                    : <img className={styles.projects_navigation_menu__image__portrait} src={project_items[projectInformation.id - 1].data[0].image} alt=""/>
                }
              </div>
              <ul>
                { project_items.map((block, i)=>
                    <li className={ projectInformation.id - 1 === i && listItemIsHighlighted ? styles.highlighted__project : '' }
                        key={i}
                        onClick={()=>setElementToCall(i+1)}
                        onMouseOver={()=>setListItemHighlight(false)}
                        onMouseLeave={()=>setListItemHighlight(true)}>
                      { 
                        i < 9 ? 
                          `0${i + 1}` 
                          : 
                          i + 1 
                      }/{ 
                          project_items.length < 10 ? 
                            `0${project_items.length}` 
                            : 
                            project_items.length
                        }
                    </li>
                  ) 
                }
              </ul>
              <img className={styles.projects_navigation_menu__close}
                   onClick={()=>toggleNavigationMenuVisibility(false)} 
                   src="/cursor/SeeMore.png"/>
            </div>
            :
            null
        }
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
                : extraFullscreenLandscape 
                  ? `${styles.fullscreen_mobile} ${styles.fullscreen_mobile__full_landscape}`
                  : `${styles.fullscreen_mobile}`}>
              <img onClick={()=>handleFullscreenClose()} 
                   src="/cursor/SeeMore.png" 
                   className={styles.fullscreen_mobile__close}
                   alt="close"/>
              <img src={ fullscreenImage } 
                   alt="full screen image"/>
            </div>
          : 
          null 
      }

      <style jsx>{`
        .projects_blocks__container {
          display: flex;
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
