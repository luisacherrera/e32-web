import CarouselPage from '../../components/CarouselPage'

export default function Building() {
  const data = [
    {
      title: 'Paseo de Gracia. Residential Apartments',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/building/1.jpg',
      isLandscape: false
    },
    {
      title: 'Paseo de Gracia. Residential Apartments 2',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/building/2.jpg',
      isLandscape: true
    },
    {
      title: 'Paseo de Gracia. Residential Apartments 3',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/building/3.jpg',
      isLandscape: false
    },
    {
      title: 'Paseo de Gracia. Residential Apartments 4',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/building/4.jpg',
      isLandscape: true
    },
    {
      title: 'Paseo de Gracia. Residential Apartments 5',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/building/5.jpg',
      isLandscape: true
    }
  ]

  return (
    <>
      <CarouselPage carousel_data={data}
                    category="building"></CarouselPage>
    </>
  )
}
