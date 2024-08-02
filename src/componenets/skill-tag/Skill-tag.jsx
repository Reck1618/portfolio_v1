import PropTypes from 'prop-types';
import './Skill-tag.css'


const SkillTag = ({ index, skill, style}) => {
    return (
        <div key={index} className='skill-tag' style={style} >
            <img src={Object.values(skill)[0]} alt={Object.keys(skill)[0]}/>
            <span>{Object.keys(skill)[0]}</span>
        </div>
    )
};


SkillTag.propTypes = {
    index: PropTypes.number,
    skill: PropTypes.object,
    style: PropTypes.object,
};

export default SkillTag;