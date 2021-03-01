import { useEffect, useRef, useState } from 'react'
import styles from './ProjectsItem.module.scss'
import VisibilitySensor from 'react-visibility-sensor'

export default function ProjectsItem({onItemVisible, item_data}) {
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

  const [fullScreen, toggleFullscreen] = useState(false)
  const [fullscreenImage, setFullscreenImage] = useState()

  const setFullscreen = (image) => {
    setFullscreenImage(image)
    toggleFullscreen(!fullScreen)
  }

  const handleToggleFullScreen = () => {
    toggleFullscreen(!fullScreen)
  }
  
  const imageIsInViewport = (isVisible) => {
    if (isVisible) {
      onItemVisible({
        title: data.title,
        year: data.year,
        location: data.location,
        expedient: data.expedient
      });
    }
  }

  return (
    <>
      <VisibilitySensor onChange={imageIsInViewport}>
        <div className={ styles.item_container }
          onClick={()=>setFullscreen(data.imageUrl)}>
          <img 
            className={ data.isLandscape ? `${ styles.image_item } ${ styles.image_item__vertical_variant }` : `${ styles.image_item } ${ styles.image_item__horizontal_variant }`} 
            src={ data.imageUrl } />
        </div>
      </VisibilitySensor>
      {
          data.text ? 
            <div className={`${ styles.item_container } ${ styles.project_info_container }`}>
              <p>{ data.text }</p>
            </div> 
            : 
            null
      }
      {
        fullScreen ? 
          <div onClick={()=>{handleToggleFullScreen()}} 
               className={ styles.image_container_fullscreen_mode }>
            <img src={ fullscreenImage }/>
          </div>
          : 
          null 
      }
    </>
  )
}
