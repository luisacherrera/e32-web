import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './CarouselDetailedItem.module.scss';

export default function CarouselDetailedItem({
  imageOverlay,
  isFirstElement, 
  isBuildingVariant, 
  isLandscape,
  isLightingVariant,
  isMediumLandscape,
  isSmallPortrait,
  isSquarePortrait,
  item,
  onItemVisible,
  onFullscreenMode
}) {

  const [imageRef, inView] = useInView({threshold: 0.5})

  const buildingVariant = isBuildingVariant ? styles.image_item__building_variant : ''
  const isLandscapeContainer = isLandscape || isMediumLandscape ? styles.container__landscape_variant : ''
  const isLightingLandscapeContainer = isLightingVariant ? styles.container__landscape_variant__lighting : ''
  const isSquarePortraitContainer = isSquarePortrait ? styles.container__square_portrait_variant : ''
  const doubleSpaced = item.spaced === 2 ? styles.image_item__double_spaced : ''
  const firstElement = isFirstElement ? styles.first_image_container : ''
  const imageOrientation = isLandscape ? styles.image_item__horizontal_variant : styles.image_item__vertical_variant
  const imageHasOverlay = imageOverlay ? styles.image_item__overlay : ''
  const lightingVariant = isLightingVariant ? styles.image_item__lighting_variant : ''
  const singleSpaced = item.spaced === 1 ? styles.image_item__single_spaced: ''
  const mediumLandscape = isMediumLandscape ? styles.image_item__medium_landscape : ''
  const smallPortrait = isSmallPortrait ? styles.image_item__small_portrait : ''
  const squarePortrait = isSquarePortrait ? styles.image_item__square_portrait : ''

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
            ${isSquarePortraitContainer}
            ${singleSpaced}
           `}>
        <img onClick={()=>setFullscreen(item.image)}
             className={`
              ${styles.image_item}
              ${imageOrientation}
              ${imageHasOverlay}
              ${buildingVariant}
              ${lightingVariant}
              ${mediumLandscape}
              ${smallPortrait}
              ${squarePortrait}
             `} 
             src={item.image}
             ref={imageRef}/>
      </div>
    </>
  )
}