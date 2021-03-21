import ProjectPage from '../../../components/ProjectPage'
import { getArchitectureData } from '../../../lib/api'

export default function ArchitectureProjects({data}) {
  const project_data = [];

  data.forEach((item)=>{
    const customFields = item.acf

    const items = Object.keys(customFields).reduce((acc,key)=>{
      if (customFields[key].image && customFields[key].image !== false) {
        acc.push({
          imageId: customFields[key].image.ID, 
          title: customFields[key].title,
          year: customFields[key].year,
          location: customFields[key].location,
          expedient: customFields[key].expedient_number,
          image: customFields[key].image?.url,
          isLandscape: customFields[key].image?.width > customFields[key].image?.height ? true : false,
          text: customFields[key].text && customFields[key].text
        })
      }
  
      return acc
    },[])

    const projectInfo = {
      projectId: customFields.project_id,
      projectDescription: customFields.project_description,
      data: items
    }

    project_data.push(projectInfo)
  })

  return (
    <ProjectPage project_items={project_data.reverse()}
                 category={'architecture'}></ProjectPage>
  )
}

export async function getServerSideProps() {
  const data = await getArchitectureData()

  return {
    props: {
      data: data
    }
  }
}
