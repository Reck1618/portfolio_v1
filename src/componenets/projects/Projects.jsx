import ProjectCard from '../projects-card/Project-card';
import { projectsData } from '../../utils/data';
import { useState } from 'react';
import { useLaptopView } from '../../contexts/LaptopContext';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const [startIndex, setStartIndex] = useState(0);
    const isLaptopScreen = useLaptopView();

    const handleNext = () => {
        setTimeout(() => {
            setStartIndex(prevIndex => Math.min(prevIndex + (isLaptopScreen ? 1 : 2), projectsData.length - (isLaptopScreen ? 1 : 2)));
        }, 200); // Adjust the duration to match the animation duration
    };

    const handlePrev = () => {
        setTimeout(() => {
            setStartIndex(prevIndex => Math.max(prevIndex - (isLaptopScreen ? 1 : 2), 0));
        }, 200); // Adjust the duration to match the animation duration
    };

    // Calculate the number of pages
    const numPages = Math.ceil(projectsData.length / (isLaptopScreen ? 1 : 2));

    // Generate dots for each page
    const dots = [];
    for (let i = 0; i < numPages; i++) {
        dots.push(<div key={i} className={`dot ${i === startIndex / (isLaptopScreen ? 1 : 2) ? 'active' : ''}`} />);
    }

    return (
        <div id='projects' className='projects-container'>

            <div className='projects-list'>

                {projectsData.slice(startIndex, startIndex + (isLaptopScreen ? 1 : 2)).map((project, index) => (
                        <ProjectCard key={startIndex + index} project={project} />
                ))}

            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className='project-controls'
            >
                <div className={`control-arrow ${startIndex === 0 ? 'disabled' : ''}`} onClick={handlePrev}>&#8249;</div>
                <div className='control-dots'>{dots}</div>
                <div className={`control-arrow ${startIndex + (isLaptopScreen ? 1 : 2) >= projectsData.length ? 'disabled' : ''}`} onClick={handleNext}>&#8250;</div>
            </motion.div>

        </div>
    );
};

export default Projects;
