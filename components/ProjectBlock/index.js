import styles from './ProjectBlock.module.scss'
import ProjectsItem from '../ProjectsItem'
import { useEffect, useRef } from 'react'

export default function ProjectBlock({updateItemInformation, project_data, project_id, total_project_length, isFirstElement, callToView, canScrollIntoView}) {
  const handleNewVisibleItem = (item) => {
    const itemToUpdate = {
      ...item,
      id: project_id
    }
    updateItemInformation(itemToUpdate)
  }

  const blockRef = useRef(null)

  useEffect(()=>{
    if (canScrollIntoView && callToView === project_id) {
      console.log('heeey', callToView)
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
        </div>
      </div>
        {
          project_data.map((item, i) =>
            <ProjectsItem key={ item.imageId }
                          item_data={ item }
                          onItemVisible={handleNewVisibleItem}>
            </ProjectsItem>
          )
        }
      </div>
    </>
  )
}