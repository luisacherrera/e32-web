import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './CarouselItem.module.scss';

export default function CarouselItem({
  category,
  isBuildingVariant, 
  isFirstElement, 
  isLandscape,
  isLightingVariant,
  item,
  onItemVisible
}) {

  const router = useRouter();

  const [imageRef, inView] = useInView({threshold: 0.5})

  const buildingVariant = isBuildingVariant ? styles.image_item__building_variant : ''
  const isLandscapeContainer = isLandscape ? styles.container__landscape_variant : ''
  const isLightingLandscapeContainer = isLightingVariant ? styles.container__landscape_variant__lighting : ''
  const doubleSpaced = item.spaced === 2 ? styles.image_item__double_spaced : ''
  const firstElement = isFirstElement ? styles.first_image_container : ''
  const imageOrientation = isLandscape ? styles.image_item__horizontal_variant : styles.image_item__vertical_variant
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
              ${buildingVariant}
              ${lightingVariant}
             `} 
             src={item.imageURL}
             ref={imageRef}/>
          <img className={styles.see_more__mobile} 
               src="/cursor/SeeMore.png" 
               alt="See more"/>
      </div>
    </>
  )
}