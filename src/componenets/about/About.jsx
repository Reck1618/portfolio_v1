import { motion } from 'framer-motion';
import { profileInfo } from '../../utils/data';
import './About.css'


const About = () => {
    const descriptionLines = profileInfo.description.split('\n').map((line, index) => (
        <span key={index}>{line}<br /></span>
    ));


    return (
        <div className='about-container'>
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
                {descriptionLines}
            </motion.span>
        </div>
    );
}

export default About;