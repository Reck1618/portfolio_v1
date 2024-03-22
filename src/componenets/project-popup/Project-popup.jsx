import PropTypes from 'prop-types';
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
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
                <div className="temp-image">
                    <img src={project.image} alt={project.name} className="project-popup-image" />
                </div>
                <div className="project-popup-content">
                    <div className="project-popup-details">
                        <p>{project.summary}</p>
                    </div>
                </div>
                <div className="project-popup-links">
                            <a href={project.url} target="_blank" rel="noreferrer"><TbBrandGithub /> Github</a>
                            <a href={project.live} target="_blank" rel="noreferrer"><RxOpenInNewWindow /> Live Demo</a>
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
        description: PropTypes.string.isRequired,
        live: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default ProjectPopup;