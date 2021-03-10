import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './CarouselItem.module.scss';

export default function CarouselItem({
  category,
  isBuildingVariant, 
  isDoubleSpaced,
  isFirstElement, 
  isLandscape,
  isLightingVariant,
  isSingleSpaced,
  item,
  onItemVisible
}) {
  const router = useRouter();

  const [imageRef, inView] = useInView({
    threshold: 0.85,
  })

  const buildingVariant = isBuildingVariant ? styles.image_item__building_variant : ''
  const doubleSpaced = isDoubleSpaced ? styles.image_item__double_spaced : ''
  const firstElement = isFirstElement ? styles.first_image_container : ''
  const imageOrientation = isLandscape ? styles.image_item__horizontal_variant : styles.image_item__vertical_variant
  const lightingVariant = isLightingVariant ? styles.image_item__lighting_variant : ''
  const singleSpaced = isSingleSpaced ? styles.image_item__single_spaced: ''

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
      <div ref={imageRef} onClick={()=>router.push(`/${category}/projects`)} 
           className={`
            ${styles.container}
            ${firstElement}
            ${doubleSpaced}
            ${singleSpaced}
           `}>
        <img className={`
              ${styles.image_item}
              ${imageOrientation}
              ${buildingVariant}
              ${lightingVariant}
            `} 
             src={item.imageURL}/>
      </div>
    </>
  )
}