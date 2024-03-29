import {useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Projects from '../projects/Projects';
import About from '../about/About';
import Experiance from '../experience/Experiance';
import Contact from '../contact/Contact';
import Skills from '../skills/Skills';
import ResumeButton from '../resume/Resume';
import Hamburger from 'hamburger-react';
import './Navigation.css';
import SideBar from '../../componenets/side-bar/Side-bar';
import { useMobileView } from '../../contexts/MobileContext';


const Navigation = () => {
    const [activeNavItem, setActiveNavItem] = useState('About');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isMobileView = useMobileView();


    const handleNavItemClick = (item) => {
        setActiveNavItem(item);

        if (isMobileView) {
            const sectionId = item.toLowerCase();
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            setIsMenuOpen(false);
        }
    };


    const renderComponent = () => {
        switch (activeNavItem) {
            case 'About':
                return (
                    <About />
                );
            case 'Skills':
                return (
                    <Skills />
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
                    <Contact />
                );
            case 'Resume':
                return (
                    <ResumeButton />
                );
            default:
                return null;
        }
    };

    if (isMobileView) {
        return (
            <section id='main-content'>
                <header id='mobile-header'>
                    <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} color='rgba(128, 237, 153, 0.8)' size={28} />
                </header>

                <AnimatePresence>
                {isMenuOpen &&
                        <motion.nav
                            initial={{ x: '100vw' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100vw' }}
                            transition={{ duration: 0.3 }}
                            className="nav-container"
                        >
                            <ul
                                className="nav-container-items"
                                >
                                <li onClick={() => handleNavItemClick('About')} className={activeNavItem === 'About' ? 'active' : ''}>About</li>
                                <li onClick={() => handleNavItemClick('Skills')} className={activeNavItem === 'Skills' ? 'active' : ''}>Skills</li>
                                <li onClick={() => handleNavItemClick('Experience')} className={activeNavItem === 'Experience' ? 'active' : ''}>Experience</li>
                                <li onClick={() => handleNavItemClick('Projects')} className={activeNavItem === 'Projects' ? 'active' : ''}>Projects</li>
                                <li onClick={() => handleNavItemClick('Contact')} className={activeNavItem === 'Contact' ? 'active' : ''}>Contact</li>
                                <li onClick={() => handleNavItemClick('Resume')} className={activeNavItem === 'Resume' ? 'active' : ''}>Resume</li>
                            </ul>
                            <SideBar />
                        </motion.nav>
                    }
                </AnimatePresence>

                <main>
                    <About />
                    <Skills />
                    <Experiance />
                    <Projects />
                    <Contact />
                    <ResumeButton />
                </main>
        </section>
        );
    } else {
        return (
        <section id='main-content'>
            <nav className='nav-container'>
                <motion.ul
                    initial={{ x: '-50vw' }}
                    animate={{ x: 0 }}
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
    }
};

export default Navigation;