import { motion } from 'framer-motion';
import { profileInfo } from '../../utils/data';
import ResumeButton from '../resume/Resume';
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
                A passionate <span className='highlight-text'>Full-stack developer</span> who loves turning cool ideas into even cooler web applications.<br />
                Whether it's crafting sleek frontend interfaces or building powerful backend systems, I'm all about creating solutions that are both scalable and efficient.<br /> <br />
                When I'm not coding, you'll find me exploring the latest tech trends and tinkering with new tools to keep my skills sharp.<br />
            </motion.span>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className='resume-button-container'
            >
                <ResumeButton />
            </motion.div>
        </div>
    );
}

export default About;