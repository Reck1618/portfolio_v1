import { useState } from 'react';
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
import PropTypes from 'prop-types';
import ProjectPopup from '../project-popup/Project-popup';
import './Project-card.css';


const ProjectCard = ({ project }) => {

    const {name, summary, live, url, skills} = project;
    const [modalStatus, setModalStatus] = useState(false);

    const toggleModal = () => {
        setModalStatus(!modalStatus);
    }

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    return (
        <>
        <div className='project-card' onClick={toggleModal}>
            <div className='project-card-header'>
                <div className='project-heading'>
                    {name}
                </div>
                <div className='project-links'>
                    <a href={url} target="_blank" rel="noreferrer" onClick={stopPropagation}><TbBrandGithub /></a>
                    <a href={live} target="_blank" rel="noreferrer" onClick={stopPropagation}><RxOpenInNewWindow /></a>
                </div>
            </div>

            <div className='project-summary'>
                {summary}
                <span>...show more</span>
            </div>

            <div className='project-skills'>
                {skills.map((skill, index) => {
                    if (index < 5) {
                    return <span key={index}>{skill}</span>
                    }
                })}
            </div>
        </div>
        <ProjectPopup isOpen={modalStatus} project={project} onClose={toggleModal} />
        </>
    )
};


ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        live: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default ProjectCard;