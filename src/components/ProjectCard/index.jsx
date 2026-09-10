import './ProjectCard.scss'

const ProjectCard = ({cover, title, name, description, skills}) => {
    return (
        <div className='project-card'>
            <div className='project-card__cover'>
                <img src={cover} alt="project image" className='project-card__cover-image'/>
            </div>
            <div className='project-card__description'>
                <h2 className='project-card__description-title'>{title}</h2>
                <h3 className='project-card__description-name'>{name}</h3>
                {description.map((descriptionParagraph, index) => (
                    <p key={`${descriptionParagraph}-${index}`} className='project-card__description-paragraph'>
                        {descriptionParagraph}
                    </p>
                ))}
                <div className='project-card__description-skills-container'>
                    {skills.map((skill, index) => (
                        <div key={`${skill}-${index}`} className='project-card__description-skill'>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard