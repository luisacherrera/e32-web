import ProjectPage from '../../../components/ProjectPage'
import architecture_projects from '../../../lib/architecture_projects'

export default function ArchitectureProjects() {
  return (
    <ProjectPage project_items={architecture_projects}
                 category={'architecture'}></ProjectPage>
  )
}
