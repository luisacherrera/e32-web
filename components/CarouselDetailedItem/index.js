import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './CarouselDetailedItem.module.scss';

export default function CarouselDetailedItem({
  imageOverlay,
  isFirstElement, 
  isBuildingVariant, 
  isLandscape,
  isLightingVariant,
  item,
  onItemVisible,
  onFullscreenMode
}) {

  const [imageRef, inView] = useInView({threshold: 0.5})

  const buildingVariant = isBuildingVariant ? styles.image_item__building_variant : ''
  const isLandscapeContainer = isLandscape ? styles.container__landscape_variant : ''
  const isLightingLandscapeContainer = isLightingVariant ? styles.container__landscape_variant__lighting : ''
  const doubleSpaced = item.spaced === 2 ? styles.image_item__double_spaced : ''
  const firstElement = isFirstElement ? styles.first_image_container : ''
  const imageOrientation = isLandscape ? styles.image_item__horizontal_variant : styles.image_item__vertical_variant
  const imageHasOverlay = imageOverlay ? styles.image_item__overlay : ''
  const lightingVariant = isLightingVariant ? styles.image_item__lighting_variant : ''
  const singleSpaced = item.spaced === 1 ? styles.image_item__single_spaced: ''

  const handleItemVisibility = () => {
    onItemVisible({
      title: item.title,
      year: item.year,
      location: item.location,
      expedient: item.expedient
    })
  }

  const setFullscreen = (image) => {
    onFullscreenMode(image, isLandscape)
  }

  useEffect(()=>{
    if (inView) {
      handleItemVisibility()
    }
  }, [inView])

  return (
    <>
      <div className={`
            ${styles.container}
            ${doubleSpaced}
            ${firstElement}
            ${isLandscapeContainer}
            ${isLightingLandscapeContainer}
            ${singleSpaced}
           `}>
        <img onClick={()=>setFullscreen(item.imageURL)}
             className={`
              ${styles.image_item}
              ${imageOrientation}
              ${imageHasOverlay}
              ${buildingVariant}
              ${lightingVariant}
             `} 
             src={item.imageURL}
             ref={imageRef}/>
      </div>
    </>
  )
}