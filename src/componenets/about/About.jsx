import { motion } from 'framer-motion';
import { profileInfo } from '../../utils/data';
import './About.css'


const About = () => {

    return (
        <div id='about-heading' className='about-container'>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {profileInfo.greeting}
            </motion.p>

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                {profileInfo.name}
            </motion.h1>

            {/* <h3>Fullstack Developer</h3> */}

            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
            >
                A passionate <span className='highlight-text'>Full-stack developer</span> with a strong inclination towards backend technologies.<br />
                My expertise lies in crafting scalable and efficient solutions that power dynamic web applications.<br /> <br />
                I thrive on diving deep into the intricacies of software development, constantly seeking out new technologies and methodologies to enhance my skills and stay ahead of the curve.
            </motion.span>
        </div>
    );
}

export default About;