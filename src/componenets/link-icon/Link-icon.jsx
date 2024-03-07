import PropTypes from 'prop-types';
import './Link-icon.css';

const LinkIcon = ( {icon, link} ) => {
    return (
        <a href={link} target='_blank' rel='noreferrer'>
            <span>{icon}</span>
        </a>
    );
};

LinkIcon.propTypes = {
    icon: PropTypes.element.isRequired,
    link: PropTypes.string.isRequired,
};

export default LinkIcon;
