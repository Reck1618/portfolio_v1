import { skillsData } from '../../utils/data';
import SkillTag from '../skill-tag/Skill-tag';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.06 // Adjust the stagger time as needed
            }
        }
    };

    const tagVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring', // Adjust the transition type as needed
                stiffness: 150,
                damping: 20
            }
        }
    };

    return (
        <motion.div
            id='skills'
            className='skills-container'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
            {skillsData.map((item) => (
                item.skills.map((skill, index) => (
                    <motion.div key={index} variants={tagVariants}>
                        <SkillTag skill={skill} />
                    </motion.div>
                ))
            ))}
        </motion.div>
    );
};

export default Skills;
