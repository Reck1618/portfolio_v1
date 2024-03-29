import ProjectCard from '../projects-card/Project-card';
import { projectsData } from '../../utils/data';
import { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1280); // Adjust this threshold as needed
        };

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize); // Listen for resize events
        return () => window.removeEventListener('resize', handleResize); // Clean up the listener
    }, []);

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setStartIndex(prevIndex => Math.min(prevIndex + (isSmallScreen ? 1 : 2), projectsData.length - (isSmallScreen ? 1 : 2)));
            setIsAnimating(false);
        }, 200); // Adjust the duration to match the animation duration
    };

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setStartIndex(prevIndex => Math.max(prevIndex - (isSmallScreen ? 1 : 2), 0));
            setIsAnimating(false);
        }, 200); // Adjust the duration to match the animation duration
    };

    // Calculate the number of pages
    const numPages = Math.ceil(projectsData.length / (isSmallScreen ? 1 : 2));

    // Generate dots for each page
    const dots = [];
    for (let i = 0; i < numPages; i++) {
        dots.push(<div key={i} className={`dot ${i === startIndex / (isSmallScreen ? 1 : 2) ? 'active' : ''}`} />);
    }

    return (
        <div id='projects' className='projects-container'>

            <div className={`projects-list ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                {projectsData.slice(startIndex, startIndex + (isSmallScreen ? 1 : 2)).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className='project-controls'>
                <div className={`control-arrow ${startIndex === 0 ? 'disabled' : ''}`} onClick={handlePrev}>&#8249;</div>
                <div className='control-dots'>{dots}</div>
                <div className={`control-arrow ${startIndex + (isSmallScreen ? 1 : 2) >= projectsData.length ? 'disabled' : ''}`} onClick={handleNext}>&#8250;</div>
            </div>

        </div>
    );
};

export default Projects;
