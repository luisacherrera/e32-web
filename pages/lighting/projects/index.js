import ProjectPage from '../../../components/ProjectPage'
import lighting_projects from '../../../lib/lighting_projects'

export default function LightingProjects() {
  return (
    <ProjectPage project_items={lighting_projects}
                 category={'lighting'}></ProjectPage>
  )
}
