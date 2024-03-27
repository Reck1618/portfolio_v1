import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
import SkillTag from '../skill-tag/Skill-tag';
import './Project-popup.css'

const ProjectPopup = ({project, onClose }) => {
    return (
        <>
            <motion.div
                className="blur-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
            ></motion.div>

            <motion.div
                className="project-popup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
            >
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
                            {project.summary}
                        </div>
                    </div>
                </div>
                <div className='popup-second-block'>
                    <div className='content-features'>
                        <div>Features</div>
                        <div className='content-feature-item'>
                            {project.features.map((feature, index) => (
                                <span key={index}>- {feature}</span>
                            ))}
                        </div>
                    </div>
                    <div className='content-skills'>
                        {project.skills.map((skill, index) => (
                            <SkillTag key={index} skill={skill} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
}

ProjectPopup.propTypes = {
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