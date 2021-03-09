import CarouselPage from '../../components/CarouselPage'

export default function Architecture() {
  const data = [
    {
      title: 'Paseo de Gracia. Residential Apartments',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/architecture/1.jpg',
      isLandscape: true
    },
    {
      title: 'Paseo de Gracia. Residential Apartments 2',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/architecture/2.jpg',
      isLandscape: false
    },
    {
      title: 'Paseo de Gracia. Residential Apartments 3',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/architecture/3.jpg',
      isLandscape: false
    },
    {
      title: 'Paseo de Gracia. Residential Apartments 4',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/architecture/4.jpg',
      isLandscape: true
    },
    {
      title: 'Paseo de Gracia. Residential Apartments 5',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/architecture/5.jpg',
      isLandscape: false
    },
    {
      title: 'Paseo de Gracia. Residential Apartments',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/architecture/6.jpg',
      isLandscape: false
    },
    {
      title: 'Paseo de Gracia. Residential Apartments',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/architecture/7.jpg',
      isLandscape: false
    },
    {
      title: 'Paseo de Gracia. Residential Apartments',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/architecture/8.jpg',
      isLandscape: true
    },
    {
      title: 'Paseo de Gracia. Residential Apartments',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/architecture/9.jpg',
      isLandscape: false
    },
    {
      title: 'Paseo de Gracia. Residential Apartments',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/architecture/10.jpg',
      isLandscape: false
    },
    {
      title: 'Paseo de Gracia. Residential Apartments',
      year: '2015',
      location: 'Barcelona',
      expedient: '123ABC',
      imageURL: '/photos/architecture/11.jpg',
      isLandscape: true
    }
  ]

  return (
    <>
      <CarouselPage carousel_data={data}
                    category="architecture"></CarouselPage>
    </>
  )
}
