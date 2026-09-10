import './Projects.scss'
import { projectsData } from './../../data/projectsData'
import ProjectCard from '../ProjectCard'

const Projects = () => {
    return (
        <div className='projects'>
            <h2 className='projects-title'>My Projects</h2>
            <div className='projects-container'>
                {projectsData.map((project, index) => (
                    <div key={`${project}-${index}`}>
                        <ProjectCard cover={project.cover}
                                     title={project.title}
                                     name={project.name}
                                     description={project.description}
                                     skills={project.skills}
                        />
                    </div>   
                ))}
            </div>
        </div>
    )
}

export default Projects