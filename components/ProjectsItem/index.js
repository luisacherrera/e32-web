import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './ProjectsItem.module.scss'

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
    isLandscape: item_data.isLandscape,
    isExtraLandscape: item_data.extraLandscape ? true : false,
    isSpecialPortrait: item_data.isSpecialPortrait,
    isSpecialLandscape: item_data.isSpecialLandscape,
    isThumbnail: item_data.isThumbnail,
    isCroppedThumbnail: item_data.isCroppedThumbnail,
    isLargeThumbnail: item_data.isLargeThumbnail,
    isMediumThumbnail: item_data.isMediumThumbnail,
    isSmallThumbnail: item_data.isSmallThumbnail,
    isSpecialThumbnail: item_data.isSpecialThumbnail,
    isExtraSmallThumbnail: item_data.isExtraSmallThumbnail,
    text: item_data.text ? item_data.text : false,
  }

  const landscapeImage = data.isLandscape? styles.image_item__horizontal_variant : styles.image_item__vertical_variant
  const extraLargeImage = data.isExtraLandscape ? styles.image_item__extra_variant : ''
  const specialPortrait = data.isSpecialPortrait ? styles.image_item__special_portrait : ''
  const isSpecialLandscape = data.isSpecialLandscape ? styles.image_item__special_landscape : ''
  const isThumbnail = data.isThumbnail ? styles.image_item__thumbnail : ''
  const isCroppedThumbnail = data.isCroppedThumbnail ? styles.image_item__cropped_thumbnail : ''
  const isSmallThumbnail = data.isSmallThumbnail ? styles.image_item__small_thumbnail : ''
  const isSpecialThumbnail = data.isSpecialThumbnail ? styles.image_item__special_thumbnail : ''
  const isExtraSmallThumbnail = data.isExtraSmallThumbnail ? styles.image_item__extra_small_thumbnail : ''
  const isMediumThumbnail = data.isMediumThumbnail ? styles.image_item__medium_thumbnail : ''
  const isLargeThumbnail = data.isLargeThumbnail ? styles.image_item__large_thumbnail : ''

  const setFullscreen = (image) => {
    onFullscreenMode(image, data.isLandscape, data.isExtraLandscape)
  }

  const [ref, inView] = useInView({threshold: 0.5})

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
        onClick={()=>setFullscreen(data.imageUrl)}>
        <img
          className={`
            ${ styles.image_item } 
            ${landscapeImage} 
            ${extraLargeImage} 
            ${specialPortrait} 
            ${isSpecialLandscape}
            ${isThumbnail}
            ${isCroppedThumbnail}
            ${isExtraSmallThumbnail}
            ${isSmallThumbnail}
            ${isSpecialThumbnail}
            ${isMediumThumbnail}
            ${isLargeThumbnail}
          `} 
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
