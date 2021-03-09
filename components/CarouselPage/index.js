import { useRouter } from 'next/router';
import { useState } from 'react';
import CarouselItem from '../CarouselItem';
import styles from './CarouselPage.module.scss';

export default function CarouselPage({
  carousel_data, 
  category
}) {
  const router = useRouter();

  const handleNewVisibleItem = (item) => {
    updateItemInformation(item)
  }

  const [itemInformation, updateItemInformation] = useState({
    title: carousel_data[0].title,
    year: carousel_data[0].year,
    location: carousel_data[0].location,
    expedient: carousel_data[0].expedient
  })

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header_logo}>
          <h1 className={styles.title_style} onClick={()=>router.push('/')}>E32</h1>
        </div>
        <div className={styles.address_info_container}>
          <address>
            Nº02 C/Energía, 32 Planta 1<br/>
            08940 Cornellà de Llobregat<br/>
            Barcelona
          </address>
        </div>
        <div className={styles.header_logo__page_variant}>
          <h1 className={
            category === 'lighting' ? `${styles.title_style__lighting}` : `${styles.title_style}`
          }>{
            category === 'architecture' ? 'A' :
              category === 'building' ? 'B' : 
                'L'
          }</h1>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer__address_container}>
            <h3>{ itemInformation.title }</h3>
          </div>
          <div className={styles.footer__info_container}>
            <h3>Year: { itemInformation.year }</h3>
            <h3>Location: { itemInformation.location }</h3>
            <h3>NºEXP: { itemInformation.expedient }</h3>
          </div>
          <p className={styles.footer_middle} onClick={()=>router.push('/about')}>About</p>
          <ul className={styles.footer_home__navbar}>
            {
              category === 'architecture' ? <li className={styles.footer_home__navbar_item}>Architecture</li>
                : <li onClick={()=>router.push('/architecture')} className={styles.footer_home__navbar_item_noactive}>Architecture</li>
            }
            {
              category === 'lighting' ? <li className={styles.footer_home__navbar_item}>Lighting</li>
                : <li onClick={()=>router.push('/lighting')} className={styles.footer_home__navbar_item_noactive}>Lighting</li>
            }
            {
              category === 'building' ? <li className={styles.footer_home__navbar_item}>Building</li>
                : <li onClick={()=>router.push('/building')} className={styles.footer_home__navbar_item_noactive}>Building</li>
            }
          </ul>
        </div>
        <div className={styles.horizontal_container}>
            {
              carousel_data.map((data, i)=>
                <CarouselItem
                  key={i}
                  category={category}
                  isDoubleSpaced={i === 1 || i === 6}
                  isFirstElement={i === 0}
                  isLandscape={data.isLandscape}
                  isSingleSpaced={i === 3}
                  item={data}
                  onItemVisible={handleNewVisibleItem}>
                </CarouselItem>
              )
            }
        </div>
      </div>
      <div className={styles.footer_about__mobile} onClick={()=>router.push('/about')}>
        <h2 className={styles.footer_about__mobile_claim}>See more</h2>
        <img onClick={()=>router.push('/about')} src="/cursor/SeeMore.png"/>
      </div>
    </>
  )
}
