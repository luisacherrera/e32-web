import CarouselPage from '../../components/CarouselPage'
import building_items from '../../lib/building_category'

export default function Building() {
  return (
    <>
      <CarouselPage carousel_data={building_items}
                    category="building"></CarouselPage>
    </>
  )
}
