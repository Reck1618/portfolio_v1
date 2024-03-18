import PropTypes from 'prop-types';
import './Contact-popup.css'

const ContactPopup = ({ isOpen, message, onClose }) => {

    return (
        <>
            {isOpen &&
                <div className="blur-overlay"></div>
            }
            <div className={`contact-popup ${isOpen ? 'open' : ''}`}>
                <div className="contact-popup-header">
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="contact-popup-message">
                    {message}
                </div>
            </div>
        </>
    );
};

ContactPopup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
};

export default ContactPopup;