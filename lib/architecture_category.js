const architecture_items = [
  {
    project_id: "BCN017",
    title: "BCN017 - SANTS",
    year: 2021,
    location: "Carrer de Sants, Barcelona",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/09.BCN017 - Sants/Sants01.jpg"),
    isPortrait: true,
    spaced: 0
  },
  {
    project_id: "BCN017",
    title: "BCN017 - SANTS",
    year: 2021,
    location: "Carrer de Sants, Barcelona",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/09.BCN017 - Sants/Sants02.jpg"),
    isSmallPortrait: true,
    spaced: 1
  },
  {
    project_id: "BCN326",
    title: "BCN326 - PROVENÇA",
    year: 2021,
    location: "Carrer Provença, Barcelona",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/010.BCN326 - Provença/Provenca01.jpg"),
    isPortrait: true,
    spaced: 0
  },
  {
    project_id: "BCN326",
    title: "BCN326 - PROVENÇA",
    year: 2021,
    location: "Carrer Provença, Barcelona",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/010.BCN326 - Provença/Provenca02.jpg"),
    isMediumLandscape: true,
    spaced: 2
  },
  {
    project_id: "BCN478",
    title: "BCN478 - ARAGÓ",
    year: 2021,
    location: "Carrer Aragó, Barcelona",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/011.BCN478 - Aragó/Arago01.jpg"),
    isLargePortrait: true,
    spaced: 0
  },
  {
    project_id: "BCN478",
    title: "BCN478 - ARAGÓ",
    year: 2021,
    location: "Carrer Aragó, Barcelona",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/011.BCN478 - Aragó/Arago02.jpg"),
    isMediumPortrait: true,
    spaced: 2
  },
  {
    project_id: "STCGT1",
    title: "LFS18 - HOUSE LA FLORESTA",
    year: 2020,
    location: "Sant Cugat",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/08.SantCugat/SantCugat_2.jpg"),
    isLandscape: true,
    spaced: 0
  },
  {
    project_id: "STCGT1",
    title: "LFS18 - HOUSE LA FLORESTA",
    year: 2020,
    location: "Sant Cugat",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/08.SantCugat/SantCugat_1.jpg"),
    isLandscape: false,
    spaced: 1
  },
  {
    project_id: "GLT1",
    title: "GUA2 - HOUSE GUALTA",
    year: 2020,
    location: "Gualta, Empordà",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/07.Gualta/Destacada_Gualta.jpg"),
    isLandscape: false,
    spaced: 1
  },
  {
    project_id: "PDG1",
    title: "BCN120 - APARTMENT GRÀCIA",
    year: 2019,
    location: "Passeig de Gracia, Barcelona",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/01.PDG/PDG_4.jpg"),
    isLandscape: true,
    spaced: 0
  },
  {
    project_id: "PDG1",
    title: "BCN120 - APARTMENT GRÀCIA",
    year: 2019,
    location: "Passeig de Gracia, Barcelona",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/01.PDG/PDG_1.jpg"),
    isLandscape: false,
    spaced: 2
  },
  {
    project_id: "MLRC1",
    title: "BCN236 - APARTMENT MALLORCA",
    year: 2018,
    location: "Rambla Catalunya, Barcelona",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/02.Mallorca/Mallorca_1.jpg"),
    isLandscape: false,
    spaced: 0
  },
  {
    project_id: "MLRC1",
    title: "BCN236 - APARTMENT MALLORCA",
    year: 2018,
    location: "Rambla Catalunya, Barcelona",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/02.Mallorca/Mallorca_6.jpg"),
    isLandscape: true,
    spaced: 1
  },
  {
    project_id: "CRD1",
    title: "CRD6 - RUSTIC HOUSE",
    year: 2015,
    location: "La Cerdanya",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/03.Cerdanya/Cerdanya_6.jpg"),
    isLandscape: false,
    spaced: 0
  },
  {
    project_id: "CRD1",
    title: "CRD6 - RUSTIC HOUSE",
    year: 2015,
    location: "La Cerdanya",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/03.Cerdanya/Cerdanya_1.jpg"),
    isLandscape: false,
    spaced: 1
  },
  {
    project_id: "VRI1",
    title: "BCN125 - APARTMENT LLANÇA",
    year: 2014,
    location: "C/Dr. Roux, Barcelona",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/04.Varios/Varios_3.jpg"),
    isLandscape: true,
    spaced: 0
  },
  {
    project_id: "VLN1",
    title: "VLN29 - HOUSE LA BULLA",
    year: 2017,
    location: "Vilanova i la Geltrú",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/05.Vilanova/Vilanova_3.jpg"),
    isLandscape: false,
    spaced: 1
  },
  {
    project_id: "STG1",
    title: "SPR51 - HOUSE MAS ALBA",
    year: 2018,
    location: "Sitges",
    expedient: "123ABC",
    image: require("../public/photos/projects_architecture/06.Sitges/Sitges_2.jpg"),
    isLandscape: false,
    spaced: 1
  },
  {
    project_id: "IDT1",
    title: "SOR7 - INDUSTRIAL SHIP ALMAZAN",
    year: 2015,
    location: "Soria",
    expedient: "123ABC",
    image: require("../public/photos/projects_building/01.Industrial/industrial_5.jpg"),
    isLandscape: false,
    spaced: 0
  },
  {
    project_id: "IDT1",
    title: "SOR7 - INDUSTRIAL SHIP ALMAZAN",
    year: 2015,
    location: "Soria",
    expedient: "123ABC",
    image: require("../public/photos/projects_building/01.Industrial/industrial_1.jpg"),
    isLandscape: true,
    spaced: 1
  },
  {
    project_id: "MGT1",
    title: "SOR8 - INDUSTRIAL SMALL ALMAZAN",
    year: 2016,
    location: "Madrid",
    expedient: "123ABC",
    image: require("../public/photos/projects_building/02.Magatzem/Magatzem_1.jpg"),
    isLandscape: false,
    spaced: 1
  },
  {
    project_id: "CRD11",
    title: "GIR3 - HOUSE URTX",
    year: 2019,
    location: "La Cerdanya",
    expedient: "123ABC",
    image: require("../public/photos/projects_building/03.Cerdanya2/Cerdanya_2_3.jpg"),
    isLandscape: true,
    spaced: 2
  },
]

export default architecture_items