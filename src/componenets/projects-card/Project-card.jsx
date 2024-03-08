import PropTypes from 'prop-types';
import './Project-card.css';


const ProjectCard = ({ project }) => {

    const {name, image, description, url, skills} = project;

    return (
        <div className='project-card'>
            {/* <div className='project-image'>
                <img src={image} alt={name} />
            </div> */}

            <div className='project-content'>
                <div className='project-heading'>
                    <h3>{name}</h3>
                </div>

                <div className='project-links'>
                    <a href={url} target="_blank" rel="noreferrer">View Project</a>
                    <a href={url} target="_blank" rel="noreferrer">View Project</a>
                </div>

                <div className='project-description'>
                    <p>{description}</p>
                </div>

                <div className='project-skills'>
                    {skills.map((skill, index) => {
                        return <span key={index}>{skill}</span>
                    })}
                </div>
            </div>
        </div>
    )
};


ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default ProjectCard;