import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './CarouselItem.module.scss';

export default function CarouselItem({
  category,
  imageOverlay,
  isBuildingVariant, 
  isFirstElement, 
  isLandscape,
  isLightingVariant,
  isPortrait,
  isMediumLandscape,
  isMediumPortrait,
  isLargePortrait,
  isSmallPortrait,
  item,
  onItemVisible
}) {

  const router = useRouter();

  const [imageRef, inView] = useInView({threshold: 0.5})

  const buildingVariant = isBuildingVariant ? styles.image_item__building_variant : ''
  const isLandscapeContainer = isLandscape || isMediumLandscape ? styles.container__landscape_variant : ''
  const isLightingLandscapeContainer = isLightingVariant ? styles.container__landscape_variant__lighting : ''
  const doubleSpaced = item.spaced === 2 ? styles.image_item__double_spaced : ''
  const firstElement = isFirstElement ? styles.first_image_container : ''
  const imageOrientation = isLandscape ? styles.image_item__horizontal_variant : styles.image_item__vertical_variant
  const portraitSquare = isPortrait ? styles.image_item__square_portrait : ''
  const mediumPortraitSquare = isMediumPortrait ? styles.image_item__square_medium_portrait : ''
  const largePortraitSquare = isLargePortrait ? styles.image_item__square_large_portrait : ''
  const smallPortrait = isSmallPortrait ? styles.image_item__small_portrait : ''
  const mediumLandscape = isMediumLandscape ? styles.image_item__medium_landscape : ''
  const imageHasOverlay = imageOverlay ? styles.image_item__overlay : ''
  const lightingVariant = isLightingVariant ? styles.image_item__lighting_variant : ''
  const singleSpaced = item.spaced === 1 ? styles.image_item__single_spaced: ''
  const seeMoreMobileOrientation = isLandscape ? styles.see_more__mobile_horizontal : styles.see_more__mobile_vertical
  const seeMoreBuildingVariant = isBuildingVariant ? styles.see_more__mobile_building : ''
  const seeMoreLightingVariant = isLightingVariant ? styles.see_more__mobile_lighting : ''

  const handleItemVisibility = () => {
    onItemVisible({
      title: item.title,
      year: item.year,
      location: item.location,
      expedient: item.expedient
    })
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
        <img onClick={()=>router.push({
               pathname: `/${category}/projects`,
               query: { project: item.project_id }
             })}
             className={`
              ${styles.image_item}
              ${imageOrientation}
              ${imageHasOverlay}
              ${buildingVariant}
              ${lightingVariant}
              ${portraitSquare}
              ${mediumPortraitSquare}
              ${largePortraitSquare}
              ${smallPortrait}
              ${mediumLandscape}
             `} 
             src={item.image}
             ref={imageRef}/>
        <img className={`
              ${styles.see_more__mobile}
              ${seeMoreMobileOrientation}
              ${seeMoreBuildingVariant}
              ${seeMoreLightingVariant}
             `}
             src={require("../../public/cursor/mas.png")} 
             alt="see more mobile"/>
      </div>
    </>
  )
}