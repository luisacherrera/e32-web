import styles from './ProjectBlock.module.scss'
import ProjectsItem from '../ProjectsItem'

export default function ProjectBlock({updateItemInformation, project_data, isFirstElement}) {
  const handleNewVisibleItem = (item) => {
    updateItemInformation(item)
  }
  
  return (
    <>
      <div className={ isFirstElement ? ` ${styles.first_element} ${styles.horizontal_container}` : `${styles.horizontal_container}` }>
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