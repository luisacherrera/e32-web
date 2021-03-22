import CarouselPage from '../../components/CarouselPage'
import { getSlidersData } from '../../lib/api'

export default function Building({data}) {
  const customFields = data.find((field)=>field.slug === 'building').acf

  const items = Object.keys(customFields).reduce((acc,key)=>{
    if (customFields[key].image !== false) {
      acc.push({
        project_id: customFields[key].id,
        title: customFields[key].title,
        year: customFields[key].year,
        location: customFields[key].location,
        expedient: customFields[key].expedient_number,
        imageURL: customFields[key].image.url,
        isLandscape: customFields[key].image.width > customFields[key].image.height ? true : false
      })
    }

    return acc
  },[])

  return (
    <>
      <CarouselPage carousel_data={items}
                    category="building"></CarouselPage>
    </>
  )
}

export async function getServerSideProps() {
  const data = await getSlidersData()

  return {
    props: {
      data: data
    }
  }
}
