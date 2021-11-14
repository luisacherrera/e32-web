import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import ProjectsItem from '../ProjectsItem'
import styles from './ProjectBlock.module.scss'

export default function ProjectBlock({
  callToView,
  canScrollIntoView,
  isFirstElement,
  project_data,
  project_description,
  project_id,
  project_position,
  showFullscreenImage,
  total_project_length,
  updateItemInformation,
  callProjectToView
}) {

  const router = useRouter()

  const { project } = router.query
  
  const handleNewVisibleItem = (item) => {
    const itemToUpdate = {
      ...item,
      id: project_position
    }
    updateItemInformation(itemToUpdate)
  }

  const blockRef = useRef(null)

  const handleSetFullscreen = (img, size, extraSize) => {
    showFullscreenImage(img, size, extraSize)
  }

  if (canScrollIntoView && callToView === project_position) {
    blockRef.current.scrollIntoView({behavior: "auto", inline: "start"})
  }

  useEffect(()=>{
    if (project_id === project) {
      callProjectToView(project_position)
    }
  }, [])

  return (
    <>
      <div ref={blockRef} className={styles.horizontal_container}>
        <div className={ isFirstElement ? ` ${styles.first_element} ${styles.project_intro_container}` : `${styles.project_intro_container}` }>
          <div className={styles.project_intro__counter}>
            <h2>{ project_data[0].title }</h2>
            {
              project_description.length > 0 && <p>{ project_description }</p>
            }
          </div>
          <div className={styles.project_intro__mobile_arrow}>
            <img src={require("../../public/cursor/Flecha.svg")} alt="arrow"/>
          </div>
        </div>
        {
          project_data.map((item, i) =>
            <ProjectsItem key={ item.imageId }
                          item_data={ item }
                          onItemVisible={handleNewVisibleItem}
                          onFullscreenMode={handleSetFullscreen}>
            </ProjectsItem>
          )
        }
      </div>
    </>
  )
}