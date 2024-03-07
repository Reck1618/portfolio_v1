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
    return (
        <section className='projects-section'>
            <div className={`projects-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                {projectsData.slice(startIndex, startIndex + 2).map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
            </div>
            <div className="controls">
                <button onClick={handlePrev} disabled={startIndex === 0}>Prev</button>
                <button onClick={handleNext} disabled={startIndex >= projectsData.length - 2}>Next</button>
            </div>
        </section>
    );
};

export default Projects;