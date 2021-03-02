import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react';
import styles from './ArchitectureProjects.module.scss'
import ProjectBlock from '../../../components/ProjectBlock'

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

  const router = useRouter()

  const handleNewItemInformation = (information) => {
    updateProjectInformation(information)
  }

  const [projectInformation, updateProjectInformation] = useState({})

  // const moveCarrousel = (evt) => {
  //   evt.deltaY > 0 ? 
  //     containerRef.current.scrollLeft -= 150 : 
  //     containerRef.current.scrollLeft += 150
    
  // }

  // useEffect(()=>{
  //   window.addEventListener('wheel', moveCarrousel)
  //   setInterval(()=>{
  //     containerRef.current.scrollLeft += 3
  //   }, 50)
  // })

  const containerRef = useRef(null)

  const [selectedElement, setSelectedElement] = useState(0)

  const [navigationMenuVisibility, toggleNavigationMenuVisibility] = useState(false)

  const setElementToCall = (el) => {
    toggleNavigationMenuVisibility(false)
    setSelectedElement(el)
  }

  return (
    <>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.footer__address_container}>
            <h3>{projectInformation.title}</h3>
          </div>
          <div className={styles.footer__info_container}>
            <h3>Year: {projectInformation.year}</h3>
            <h3>Location: {projectInformation.location}</h3>
            <h3>NºEXP: {projectInformation.expedient}</h3>
          </div>
          <h2 onClick={()=>router.push('/')} className={styles.footer__title}>E32</h2>
          <p onClick={()=>toggleNavigationMenuVisibility(!navigationMenuVisibility)} className={styles.footer__project_counter}>
            { projectInformation.id < 10 ? `0${projectInformation.id}` : projectInformation.id }/{ dummyData.length < 10 ? `0${dummyData.length}` : dummyData.length}</p>
          <h2 onClick={()=>router.push('/architecture')} className={styles.footer__title}>A</h2>
          <p className={styles.footer_middle} onClick={()=>router.push('/about')}>About</p>
          <img className={styles.footer_middle__mobile} onClick={()=>router.push('/about')} src="/cursor/SeeMore.png"/>
          <ul className={styles.footer_home__navbar}>
            <li className={styles.footer_home__navbar_item}>Architecture</li>
            <li onClick={()=>router.push('/lighting')} className={styles.footer_home__navbar_item_noactive}>Lighting</li>
            <li onClick={()=>router.push('/building')} className={styles.footer_home__navbar_item_noactive}>Building</li>
          </ul>
        </div>
        {
          dummyData.map((block, i)=>
            <ProjectBlock key={block.projectId} 
                          project_data={block.data}
                          project_id={i + 1}
                          isFirstElement={ i === 0 }
                          updateItemInformation={handleNewItemInformation}
                          callToView={selectedElement}>
            </ProjectBlock>
          )
        }
        {
          navigationMenuVisibility ?
            <div className={styles.projects_navigation_menu}>
              <img src={dummyData[0].data[0].image} alt=""/>
              <ul>
                { dummyData.map((block, i)=>
                    <li key={i}
                        onClick={()=>setElementToCall(i+1)}>
                      { 
                        i < 10 ? 
                          `0${i + 1}` 
                          : 
                          i + 1 
                      }/{ 
                          dummyData.length < 10 ? 
                            `0${dummyData.length}` 
                            : 
                            dummyData.length
                        }
                    </li>
                  ) 
                }
              </ul>
            </div>
            :
            null
        }
      </div>
    </>
  )
}
