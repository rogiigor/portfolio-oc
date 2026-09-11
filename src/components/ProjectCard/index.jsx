import './ProjectCard.scss'
import SiteButton from '../SiteButton'

const ProjectCard = ({project}) => {
    return (
        <div className='project-card'>
            <div className='project-card__cover'>
                <img src={project.cover} alt="project image" className='project-card__cover-image'/>
            </div>
            <div className='project-card__description'>
                <h2 className='project-card__description-title'>{project.title}</h2>
                <h3 className='project-card__description-name'>{project.name}</h3>
                {project.description.map((descriptionParagraph, index) => (
                    <p key={`${descriptionParagraph}-${index}`} className='project-card__description-paragraph'>
                        {descriptionParagraph}
                    </p>
                ))}
                <div className='project-card__description-skills-container'>
                    {project.skills.map((skill, index) => (
                        <div key={`${skill}-${index}`} className='project-card__description-skill'>
                            {skill}
                        </div>
                    ))}
                </div>
                <div className='project-card__description-live'>
                    <div className='project-card__description-live'>
                        {project.liveSite && (
                            <SiteButton name="View Site" url={project.liveSite} />
                        )}
                        <SiteButton name="GitHub Repo" url={project.gitHubRepository} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectCard