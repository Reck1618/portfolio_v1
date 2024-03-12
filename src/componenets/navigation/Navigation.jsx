import { useState } from 'react';
import { motion } from 'framer-motion';
import Projects from '../projects/Projects';
import About from '../about/About';
import Experiance from '../experience/Experiance';
import './Navigation.css';


const Navigation = () => {
    const [activeNavItem, setActiveNavItem] = useState('About');

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    };

    const renderComponent = () => {
        switch (activeNavItem) {
            case 'About':
                return (
                    <About />
                );
            case 'Skills':
                return (
                    <section>
                        <h1>Skills</h1>
                        <p>Skills content goes here...</p>
                    </section>
                );
            case 'Experience':
                return (
                    <Experiance />
                );
            case 'Projects':
                return (
                    <Projects />
                );
            case 'Contact':
                return (
                    <section>
                        <h1>Contact</h1>
                        <p>Contact content goes here...</p>
                    </section>
                );
            case 'Resume':
                return (
                    <section>
                        <h1>Resume</h1>
                        <p>Resume content goes here...</p>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <section id='main-content'>
            <nav className='nav-container'>
                <motion.ul
                    initial={{ y: '-50vw' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3}}
                    className="nav-container-items"
                    >
                    <li onClick={() => handleNavItemClick('About')} className={activeNavItem === 'About' ? 'active' : ''}>About</li>
                    <li onClick={() => handleNavItemClick('Skills')} className={activeNavItem === 'Skills' ? 'active' : ''}>Skills</li>
                    <li onClick={() => handleNavItemClick('Experience')} className={activeNavItem === 'Experience' ? 'active' : ''}>Experience</li>
                    <li onClick={() => handleNavItemClick('Projects')} className={activeNavItem === 'Projects' ? 'active' : ''}>Projects</li>
                    <li onClick={() => handleNavItemClick('Contact')} className={activeNavItem === 'Contact' ? 'active' : ''}>Contact</li>
                    <li onClick={() => handleNavItemClick('Resume')} className={activeNavItem === 'Resume' ? 'active' : ''}>Resume</li>
                </motion.ul>
            </nav>
            <main>
                {renderComponent()}
            </main>
        </section>
    )

};

export default Navigation;