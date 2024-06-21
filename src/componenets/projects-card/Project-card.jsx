import { useState } from 'react';
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import ProjectPopup from '../project-popup/Project-popup';
import './Project-card.css';


const ProjectCard = ({ project }) => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.6,
                when: 'beforeChildren',
                staggerChildren: 0.04
            }
        }
    };

    const tagVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 20
            }
        }
    };

    const {name, summary, live, url, skills} = project;
    const [modalStatus, setModalStatus] = useState(false);

    const toggleModal = () => {
        setModalStatus(!modalStatus);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const handleCloseModal = () => {
		setModalStatus(false);
	};

    return (
        <>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.5, delay: 0.2}}
            className='project-card'
            onClick={toggleModal}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4}}
                className='project-card-header'
            >
                <div className='project-heading'>
                    {name}
                </div>
                <div className='project-links'>
                    <a href={url} target="_blank" rel="noreferrer" onClick={stopPropagation}><TbBrandGithub /></a>
                    <a href={live} target="_blank" rel="noreferrer" onClick={stopPropagation}><RxOpenInNewWindow /></a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6}}
                className='project-summary'
            >
                {summary}
                <span>...show more</span>
            </motion.div>

            <motion.div
                className='project-skills'
                variants={containerVariants}
                initial='hidden'
                animate='visible'
            >
                {skills.map((skill, index) => {
                    if (index < 6) {
                    return <motion.span variants={tagVariants} key={index}>{Object.keys(skill)[0]}</motion.span>
                    }
                })}
            </motion.div>
        </motion.div>

        <AnimatePresence>
            { modalStatus && <ProjectPopup project={project} onClose={handleCloseModal} /> }
        </AnimatePresence>
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