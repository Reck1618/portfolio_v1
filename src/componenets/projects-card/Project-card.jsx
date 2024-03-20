import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
import PropTypes from 'prop-types';
import './Project-card.css';


const ProjectCard = ({ project }) => {

    const {name, description, live, url, skills} = project;

    return (
        <div className='project-card'>

            <div className='project-card-header'>
                <div className='project-heading'>
                    {name}
                </div>
                <div className='project-links'>
                    <a href={url} target="_blank" rel="noreferrer"><TbBrandGithub /></a>
                    <a href={live} target="_blank" rel="noreferrer"><RxOpenInNewWindow /></a>
                </div>
            </div>

            <div className='project-description'>
                {description}
            </div>

            <div className='project-skills'>
                {skills.map((skill, index) => {
                    if (index < 5) {
                    return <span key={index}>{skill}</span>
                    }
                })}
            </div>
        </div>
    )
};


ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        live: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default ProjectCard;