import ProjectCard from '../projects-card/Project-card';
import { projectsData } from '../../utils/data';
import { useState } from 'react';
import './Projects.css'

const Projects = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);


    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setStartIndex(prevIndex => Math.min(prevIndex + 2, projectsData.length - 2));
            setIsAnimating(false);
        }, 200); // Adjust the duration to match the animation duration
    };

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setStartIndex(prevIndex => Math.max(prevIndex - 2, 0));
            setIsAnimating(false);
        }, 200); // Adjust the duration to match the animation duration
    };

    // Calculate the number of pages
    const numPages = Math.ceil(projectsData.length / 2);

    // Generate dots for each page
    const dots = [];
    for (let i = 0; i < numPages; i++) {
        dots.push(<div key={i} className={`dot ${i === startIndex / 2 ? 'active' : ''}`} />);
    }

    return (
        <>
            <div className={`projects-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                {projectsData.slice(startIndex, startIndex + 2).map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
            </div>
            <div className="controls">
                <div className='control-button' onClick={handlePrev}>&#8249;</div>
                <div className='control-dots'>{dots}</div>
                <div className='control-button' onClick={handleNext}>&#8250;</div>
            </div>
        </>
    );
};

export default Projects;