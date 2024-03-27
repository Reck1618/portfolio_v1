import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './Experience-modal.css'


const ExperienceModal = ({ experience, onClose }) => {
    return (
        <>
            <motion.div
                className="blur-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
            >
            </motion.div>

            <motion.div
                className="experience-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
            >
                <div className="modal-header">
                    <div className='modal-heading'>
                        {experience.title}
                    </div>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className='modal-experience'>
                    <div className='modal-experience-company'>
                        {experience.company}
                    </div>
                    <div className='modal-experience-duration'>
                        {experience.duration}
                    </div>
                </div>
                <div className='modal-experience-description'>
                    <div>Summary</div>
                    <div className='description'>{experience.description}</div>
                </div>
                <div className='modal-experience-resp'>
                    <div>Responsabilities</div>
                    <ul>
                        {experience.responsabilities.map((responsability, index) => (
                            <li key={index} className='responsability'>
                                {responsability}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </>
    );
}

ExperienceModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    experience: PropTypes.shape({
        title: PropTypes.string,
        company: PropTypes.string,
        duration: PropTypes.string,
        description: PropTypes.string,
        responsabilities: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default ExperienceModal;