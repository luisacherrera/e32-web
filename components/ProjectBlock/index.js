import styles from './ProjectBlock.module.scss'
import ProjectsItem from '../ProjectsItem'

export default function ProjectBlock({project_data, isFirstElement}) {
  return (
    <>
      <div className={ isFirstElement ? ` ${styles.first_element} ${styles.horizontal_container}` : `${styles.horizontal_container}` }>
        {
          project_data.map((item, i) =>
            <ProjectsItem key={ item.imageId }
                          item_data={ item }>
            </ProjectsItem>
          )
        }
      </div>
    </>
  )
}