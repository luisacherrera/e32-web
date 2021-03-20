import CarouselPage from '../../components/CarouselPage'
import { getSlidersData } from '../../lib/api'

export default function Lighting({data}) {
  const customFields = data.find((field)=>field.slug === 'lighting').acf

  const items = Object.keys(customFields).reduce((acc,key)=>{
    if (customFields[key].image !== false) {
      acc.push({
        title: customFields[key].title,
        year: customFields[key].year,
        location: customFields[key].location,
        expedient: customFields[key].expedient_number,
        imageURL: customFields[key].image.url,
        isLandscape: customFields[key].image.width > customFields[key].image.height ? true : false,
        isLightingVariant: customFields[key].image.url.includes('png')
      })
    }

    return acc
  },[])

  return (
    <>
      <CarouselPage carousel_data={items}
                    category="lighting"></CarouselPage>
    </>
  )
}

export async function getStaticProps() {
  const data = await getSlidersData()

  return {
    props: {
      data: data
    }
  }
}
