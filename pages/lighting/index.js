import CarouselPage from '../../components/CarouselPage'

export default function Lighting() {
  const data = [
    {
      title: 'Paseo de Gracia. Residential Apartments',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/lighting/Destacada_1.png',
      isLandscape: true,
      isLightingVariant: true
    },
    {
      title: 'Paseo de Gracia. Residential Apartments 2',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/lighting/2.jpg',
      isLandscape: false,
      isLightingVariant: false
    },
    {
      title: 'Paseo de Gracia. Residential Apartments 3',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/lighting/3.jpg',
      isLandscape: true,
      isLightingVariant: true
    },
    {
      title: 'Paseo de Gracia. Residential Apartments 4',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/lighting/4.jpg',
      isLandscape: false,
      isLightingVariant: false
    },
    {
      title: 'Paseo de Gracia. Residential Apartments 5',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/lighting/Destacada_2.png',
      isLandscape: true,
      isLightingVariant: true
    }
  ]
  return (
    <>
      <CarouselPage carousel_data={data}
                    category="lighting"></CarouselPage>
    </>
  )
}
