import CarouselDetailedPage from '../../components/CarouselDetailedPage'
import building_items from '../../lib/building_category'

export default function Building() {
  return (
    <>
      <CarouselDetailedPage carousel_data={building_items}
                            category="building"></CarouselDetailedPage>
    </>
  )
}
