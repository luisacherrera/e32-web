import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import styles from './ProjectPage.module.scss'
import ProjectBlock from '../ProjectBlock'
import { isBrowser } from 'react-device-detect'

export default function ProjectPage({project_items, category}) {
  const router = useRouter()

  const handleNewItemInformation = (information) => {
    updateProjectInformation(information)
  }

  const [projectInformation, updateProjectInformation] = useState({
    title: project_items[0].data[0].title,
    year: project_items[0].data[0].year,
    location: project_items[0].data[0].location,
    expedient: project_items[0].data[0].expedient,
    id: 1
  })

  const containerRef = useRef(null)

  const [selectedElement, setSelectedElement] = useState(0)

  const [hasBeenCalled, setCallStatus] = useState(true)

  const [navigationMenuVisibility, toggleNavigationMenuVisibility] = useState(false)

  const setElementToCall = (el) => {
    if (!hasBeenCalled) {
      setCallStatus(true)
    }
    toggleNavigationMenuVisibility(false)
    setSelectedElement(el)
    setTimeout(()=>{
      setCallStatus(false)
    }, 1000)
  }

  const handleWheel = (evt) => {
    const container = containerRef.current
    evt.deltaY > 0 ? 
      container.scrollLeft += 500
      :
      container.scrollLeft -= 500 
  }

  const scrollSpeed = project_items.length*100

  const [fullScreen, toggleFullscreen] = useState(false)
  const [fullscreenImage, setFullscreenImage] = useState()

  const handleFullscreenImage = (image) => {
    document.body.style.overflow = 'unset' 
    setFullscreenImage(image)
    toggleFullscreen(true)
  }

  const handleFullscreenClose = () => {
    document.body.style.overflow = 'hidden'
    toggleFullscreen(false)
  }

  return (
    <>
      <div ref={containerRef} className={styles.container} onWheel={(e)=>isBrowser && handleWheel(e)}>
        <div className={styles.footer}>
          <div className={styles.footer__project_data}>
            <div className={styles.footer__project_data__title_container}>
              <h3>{projectInformation.title}</h3>
            </div>
            <div className={styles.footer__project_data__info_container}>
              <h3>Year: {projectInformation.year}</h3>
              <h3>Location: {projectInformation.location}</h3>
              <h3>NºEXP: {projectInformation.expedient}</h3>
            </div>
          </div>
          <h2 onClick={()=>router.push('/')} className={styles.footer__title}>E32</h2>
          <p onClick={()=>toggleNavigationMenuVisibility(!navigationMenuVisibility)} className={styles.footer__project_counter}>
            { projectInformation.id < 10 ? `0${projectInformation.id}` : projectInformation.id }/{ project_items.length < 10 ? `0${project_items.length}` : project_items.length}</p>
          <h2 onClick={()=>{
            category === 'architecture' ? router.push('/architecture') : 
              category === 'lighting' ? router.push('/lighting') : 
                router.push('building')
            }
              } className={styles.footer__title}>{
                category === 'architecture' ? 'A' :
                  category === 'lighting' ? 'B' :
                    'C'
              }</h2>
          <p className={styles.footer__about} onClick={()=>router.push('/about')}>About</p>
          <img className={styles.footer__about__mobile} onClick={()=>router.push('/about')} src="/cursor/SeeMore.png"/>
          <ul className={styles.footer_home__navbar}>
            {
              category === 'architecture' ? 
                <li className={styles.footer_home__navbar_item}>Architecture</li> :
                <li onClick={()=>router.push('/architecture')} className={styles.footer_home__navbar_item_noactive}>Architecture</li>
            }
            {
              category === 'lighting' ?
                <li className={styles.footer_home__navbar_item}>Lighting</li> :
                <li onClick={()=>router.push('/lighting')} className={styles.footer_home__navbar_item_noactive}>Lighting</li>

            }
            {
              category === 'building' ? 
                <li className={styles.footer_home__navbar_item}>Building</li> :
                <li onClick={()=>router.push('/building')} className={styles.footer_home__navbar_item_noactive}>Building</li>
            }
          </ul>
        </div>
        <div className="projects_blocks__container">
        {
          project_items.map((block, i)=>
            <ProjectBlock key={block.projectId}
                          callToView={selectedElement}
                          canScrollIntoView={hasBeenCalled}
                          isFirstElement={ i === 0 }
                          project_data={block.data}
                          project_id={i + 1}
                          showFullscreenImage={handleFullscreenImage}
                          total_project_length={project_items.length}
                          updateItemInformation={handleNewItemInformation}>
            </ProjectBlock>
          )
        }
        </div>
        {
          navigationMenuVisibility ?
            <div className={styles.projects_navigation_menu}>
              <div className={styles.projects_navigation_menu__image_container}>
                <img src={project_items[0].data[0].image} alt=""/>
              </div>
              <ul>
                { project_items.map((block, i)=>
                    <li key={i}
                        onClick={()=>setElementToCall(i+1)}>
                      { 
                        i < 10 ? 
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
            </div>
            :
            null
        }
      </div>
      {
        fullScreen && isBrowser ? 
          <div onClick={()=>handleFullscreenClose()} 
               className={ styles.image_container_fullscreen_mode }>
            <img src={ fullscreenImage }/>
          </div>
          : 
          null 
      }

      <style jsx>{`
        @keyframes moveSlideshow {
          100% { 
            transform: translateX(-95%);  
          }
        }

        .projects_blocks__container {
          display: flex;
          animation: moveSlideshow ${scrollSpeed}s linear infinite;
        }
      `}</style>
    </>
  )
}
