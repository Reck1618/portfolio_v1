import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { socials } from "../../utils/data";
import LinkIcon from "../link-icon/Link-icon";
import './Side-bar.css'

const socialIcons = {
    Github: {
        icon: <TbBrandGithub />,
        link: socials.Github,
    },
    Linkedin: {
        icon: <FiLinkedin />,
        link: socials.Linkedin,
    },
    Instagram: {
        icon: <FaInstagram />,
        link: socials.Instagram,
    },
    X: {
        icon: <FaXTwitter />,
        link: socials.X,
    },
};


const SideBar = () => {
    return (
        <motion.div
            initial={{ y: '50vw' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='sidebar-container'
        >

            <div className='sidebar-icons'>
                {Object.keys(socialIcons).map((name, index) => (
                    <LinkIcon
                        key={index}
                        icon={socialIcons[name].icon}
                        link={socialIcons[name].link}
                    />
                ))}
            </div>
            <div className='sidebar-line'></div>
        </motion.div>
    );
};

export default SideBar;
