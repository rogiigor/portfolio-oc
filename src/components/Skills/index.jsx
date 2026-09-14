import './Skills.scss'
import { skillList } from '../../data/skillList'
import SkillItem from '../SkillItem'

const Skills = () => {
    const devSkills = skillList.filter((skill) => skill.category === 'Skills');
    const utilities = skillList.filter((skill) => skill.category === 'Utils')
    const knowledge = skillList.filter((skill) => skill.category === 'Knowledge')
    return ( 
        <div className='skills'>
            <div className='skills-dev'>
                <h2 className='skills-dev__title'>Development Skills</h2>
                {devSkills.map((item, index) => (
                    <div key={`${item}-${index}`}>
                        <SkillItem cover={item.cover} name={item.name} />
                    </div>
                ))}
            </div>
            <div className='skills-utils'>
                <h2 className='skills-utils__title'>Development Utilities</h2>
                {utilities.map((item, index) => (
                    <div key={`${item}-${index}`}>
                        <SkillItem cover={item.cover} name={item.name} />
                    </div>
                ))}
            </div>
            <div className='skills-knows'>
                <h2 className='skills-knows__title'>Knowledge</h2>
                {knowledge.map((item, index) => (
                    <div key={`${item}-${index}`}>
                        <SkillItem cover={item.cover} name={item.name}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default  Skills