import CarouselPage from '../../components/CarouselPage'
import architecture_items from '../../lib/architecture_category'

export default function Architecture() {
  return (
    <>
      <CarouselPage carousel_data={architecture_items}
                    category="architecture"></CarouselPage>
    </>
  )
}
