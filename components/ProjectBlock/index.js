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
  showFullscreenImage,
  total_project_length,
  updateItemInformation
}) {
  const handleNewVisibleItem = (item) => {
    const itemToUpdate = {
      ...item,
      id: project_id
    }
    updateItemInformation(itemToUpdate)
  }

  const blockRef = useRef(null)

  const handleSetFullscreen = (img, size) => {
    showFullscreenImage(img, size)
  }

  useEffect(()=>{
    if (canScrollIntoView && callToView === project_id) {
      blockRef.current.scrollIntoView({behavior: "auto", inline: "start"})
    }
  })

  return (
    <>
      <div ref={blockRef} className={styles.horizontal_container}>
      <div className={ isFirstElement ? ` ${styles.first_element} ${styles.project_intro_container}` : `${styles.project_intro_container}` }>
        <div className={styles.project_intro__counter}>
          <h2>Project</h2>
          <h2>{ project_id < 10 ? `0${project_id}` : project_id }/{ total_project_length < 10 ? `0${total_project_length}` : total_project_length }</h2>
          {
            project_description.length > 0 && <p>{ project_description }</p>
          }
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