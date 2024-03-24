import PropTypes from 'prop-types';
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
import SkillTag from '../skill-tag/Skill-tag';
import './Project-popup.css'

const ProjectPopup = ({ isOpen, project, onClose }) => {
    return (
        <>
            <div className={`blur-overlay ${isOpen ? 'open' : ''}`}></div>

            <div className={`project-popup ${isOpen ? 'open' : ''}`}>
                <div className="project-popup-header">
                    <div className='project-popup-heading'>
                        {project.name}
                    </div>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="popup-first-block">
                    <img src={project.image} alt={project.name} />
                    <div className='first-block-content'>
                        <div className='content-header'>
                            <div>Summary</div>
                            <div className="content-links">
                                <a href={project.url} target="_blank" rel="noreferrer"><TbBrandGithub /> Git</a>
                                <a href={project.live} target="_blank" rel="noreferrer"><RxOpenInNewWindow /> Live</a>
                            </div>
                        </div>
                        <div className="content-details">
                            <p>{project.summary}</p>
                        </div>
                    </div>
                </div>
                <div className='popup-second-block'>
                    <div className='content-features'>
                        {project.features.map((feature, index) => (
                            <span key={index}>- {feature}</span>
                        ))}
                    </div>
                    <div className='content-skills'>
                        {project.skills.map((skill, index) => (
                            <SkillTag key={index} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

ProjectPopup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired,
        live: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
};

export default ProjectPopup;