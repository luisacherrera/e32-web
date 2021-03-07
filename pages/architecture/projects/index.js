import ProjectPage from '../../../components/ProjectPage'

export default function ArchitectureProjects() {
  const dummyData = [
    {
      projectId: 1,
      data: [
        {
          imageId: 11,
          title: "Paseo de Gracia. Residential Apartments",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/pdg/PDG_1.jpg",
          orientation: "landscape",
          text: "Lorem Ipsum Dolor Amet"
        },
        {
          imageId: 12,
          title: "Paseo de Gracia. Residential Apartments 2",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/pdg/PDG_2.jpg",
          orientation: "portrait"
        },
        {
          imageId: 13,
          title: "Paseo de Gracia. Residential Apartments 3",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/pdg/PDG_3.jpg",
          orientation: "landscape"
        },
        {
          imageId: 14,
          title: "Paseo de Gracia. Residential Apartments 4",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/pdg/PDG_4.jpg",
          orientation: "portrait"
        },
        {
          imageId: 15,
          title: "Paseo de Gracia. Residential Apartments 5",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/pdg/PDG_5.jpg",
          orientation: "landscape"
        },    
        {
          imageId: 16,
          title: "Paseo de Gracia. Residential Apartments 6",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/pdg/PDG_6.jpg",
          orientation: "landscape",
          text: "Lorem Ipsum Dolor Amet"
        },
        {
          imageId: 17,
          title: "Paseo de Gracia. Residential Apartments 7",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/pdg/PDG_7.jpg",
          orientation: "landscape",
          text: "Lorem Ipsum Dolor Amet"
        },    
        {
          imageId: 18,
          title: "Paseo de Gracia. Residential Apartments 8",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/pdg/PDG_8.jpg",
          orientation: "portrait"
        },
        {
          imageId: 19,
          title: "Paseo de Gracia. Residential Apartments 9",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/pdg/PDG_9.jpg",
          orientation: "landscape"
        },
        {
          imageId: 110,
          title: "Paseo de Gracia. Residential Apartments 10",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/pdg/PDG_10.jpg",
          orientation: "landscape"
        }
      ]
    },
    {
      projectId: 2,
      data: [
        {
          imageId: 21,
          title: "Carrer Mallorca 1",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/mallorca/Mallorca_1.jpg",
          orientation: "landscape",
          text: "Lorem Ipsum Dolor Amet"
        },
        {
          imageId: 22,
          title: "Carrer Mallorca 2",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/mallorca/Mallorca_2.jpg",
          orientation: "portrait"
        },
        {
          imageId: 23,
          title: "Carrer Mallorca 3",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/mallorca/Mallorca_3.jpg",
          orientation: "landscape"
        },
        {
          imageId: 24,
          title: "Carrer Mallorca 4",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/mallorca/Mallorca_4.jpg",
          orientation: "portrait"
        },
        {
          imageId: 25,
          title: "Carrer Mallorca 5",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/mallorca/Mallorca_5.jpg",
          orientation: "portrait"
        },    
        {
          imageId: 26,
          title: "Carrer Mallorca 6",
          year: "2015",
          location: "Barcelona",
          expedient: "123ABC",
          image: "/photos/mallorca/Mallorca_6.jpg",
          orientation: "portrait",
          text: "Lorem Ipsum Dolor Amet"
        }
      ]
    }
  ]

  return (
    <ProjectPage project_items={dummyData}
                 category={'architecutre'}></ProjectPage>
  )
}
