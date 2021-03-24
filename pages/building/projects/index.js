import ProjectPage from '../../../components/ProjectPage'
import building_projects from '../../../lib/building_projects'

export default function BuildingProjects() {
  return (
    <ProjectPage project_items={building_projects}
                 category={'building'}></ProjectPage>
  )
}
