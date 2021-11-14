import CarouselDetailedPage from '../../components/CarouselDetailedPage'
import lighting_items from '../../lib/lighting_category'

export default function Lighting() {
  return (
    <>
      <CarouselDetailedPage carousel_data={lighting_items}
                            category="lighting"></CarouselDetailedPage>
    </>
  )
}
