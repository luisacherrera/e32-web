import { useEffect } from 'react'
import styles from './ProjectsItem.module.scss'
import { useInView } from 'react-intersection-observer'
import { isBrowser } from 'react-device-detect'

export default function ProjectsItem({
  item_data,
  onItemVisible, 
  onFullscreenMode
}) {
  const data = {
    id: item_data.id,
    title: item_data.title,
    year: item_data.year,
    location: item_data.location,
    expedient: item_data.expedient,
    imageUrl: item_data.image,
    isLandscape: item_data.orientation === "landscape",
    text: item_data.text ? item_data.text : false
  }

  const setFullscreen = (image) => {
    onFullscreenMode(image, data.isLandscape)
  }

  const [ref, inView] = isBrowser ?
    useInView({
      threshold: 1
    })
    :
    useInView({
      threshold: 0.25
    })

  const handleItemVisibility = () => {
    onItemVisible({
      title: data.title,
      year: data.year,
      location: data.location,
      expedient: data.expedient
    })
  }

  useEffect(()=>{
    if (inView) {
      handleItemVisibility()
    }
  }, [inView])

  return (
    <>
      <div ref={ref} className={ styles.item_container }
        onClick={()=>isBrowser && setFullscreen(data.imageUrl)}>
        <img
          className={ data.isLandscape ? `${ styles.image_item } ${ styles.image_item__vertical_variant }` : `${ styles.image_item } ${ styles.image_item__horizontal_variant }`} 
          src={ data.imageUrl } />
      </div>
      {
          data.text ? 
            <div className={`${ styles.item_container } ${ styles.project_info_container }`}>
              <p>{ data.text }</p>
            </div> 
            : 
            null
      }
    </>
  )
}
