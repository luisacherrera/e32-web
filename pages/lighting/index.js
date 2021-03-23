import CarouselPage from '../../components/CarouselPage'
import lighting_items from '../../lib/lighting_category'

export default function Lighting() {
  return (
    <>
      <CarouselPage carousel_data={lighting_items}
                    category="lighting"></CarouselPage>
    </>
  )
}
