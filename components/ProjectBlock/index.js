import styles from './ProjectBlock.module.scss'
import ProjectsItem from '../ProjectsItem'
import { useEffect, useRef } from 'react'

export default function ProjectBlock({updateItemInformation, project_data, project_id, isFirstElement, callToView}) {
  const handleNewVisibleItem = (item) => {
    const itemToUpdate = {
      ...item,
      id: project_id
    }
    updateItemInformation(itemToUpdate)
  }

  const blockRef = useRef(null)

  useEffect(()=>{
    if (callToView === project_id) {
      blockRef.current.scrollIntoView({behavior: "smooth", block: "start"})
    }
  })

  return (
    <>
      <div ref={blockRef} className={ isFirstElement ? ` ${styles.first_element} ${styles.horizontal_container}` : `${styles.horizontal_container}` }>
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