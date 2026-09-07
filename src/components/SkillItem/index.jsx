import './SkillItem.scss'

const SkillItem = ({name, cover}) => {
   return (
    <div className='skill'>
        <img src={cover} alt={name} className='skill-image'></img>
        <div className='skill-name'>
            {name}
        </div>
    </div>
   ) 
}

export default SkillItem