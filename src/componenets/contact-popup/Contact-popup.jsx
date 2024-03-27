import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './Contact-popup.css'

const ContactPopup = ({ message, onClose }) => {

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
                className="contact-popup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
            >
                <div className="contact-popup-header">
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="contact-popup-message">
                    {message}
                </div>
            </motion.div>
        </>
    );
};

ContactPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
};

export default ContactPopup;