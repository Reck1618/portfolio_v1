import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [activeNavItem, setActiveNavItem] = useState('About');

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    };

    // Function to render the component based on the active nav item
    const renderComponent = () => {
        switch (activeNavItem) {
            case 'About':
                return (
                    <section>
                        <h1>About</h1>
                        <p>About content goes here...</p>
                    </section>
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
                    <section>
                        <h1>Experience</h1>
                        <p>Experience content goes here...</p>
                    </section>
                );
            case 'Projects':
                return (
                    <section>
                        <h1>Projects</h1>
                        <p>Projects content goes here...</p>
                    </section>
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
        <div id="main-content">
            <header>
                <nav className='nav-container'>
                <ul className="nav-container-items">
                        <li onClick={() => handleNavItemClick('About')} className={activeNavItem === 'About' ? 'active' : ''}>About</li>
                        <li onClick={() => handleNavItemClick('Skills')} className={activeNavItem === 'Skills' ? 'active' : ''}>Skills</li>
                        <li onClick={() => handleNavItemClick('Experience')} className={activeNavItem === 'Experience' ? 'active' : ''}>Experience</li>
                        <li onClick={() => handleNavItemClick('Projects')} className={activeNavItem === 'Projects' ? 'active' : ''}>Projects</li>
                        <li onClick={() => handleNavItemClick('Contact')} className={activeNavItem === 'Contact' ? 'active' : ''}>Contact</li>
                        <li onClick={() => handleNavItemClick('Resume')} className={activeNavItem === 'Resume' ? 'active' : ''}>Resume</li>
                    </ul>
                </nav>
            </header>
            <main>
                {renderComponent()}
            </main>
        </div>
    )

};

export default Navigation;