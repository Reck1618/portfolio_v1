import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { socials } from "../../utils/data";
import LinkIcon from "../link-icon/Link-icon";
import { useMobileView } from '../../contexts/MobileContext';
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

    const isMobileView = useMobileView();

    if (isMobileView) {
        return (
            <div className='sidebar-container'>
                <div className="sidebar-line one"></div>
                <div className='sidebar-icons'>
                    {Object.keys(socialIcons).map((name, index) => (
                        <LinkIcon
                            key={index}
                            icon={socialIcons[name].icon}
                            link={socialIcons[name].link}
                        />
                    ))}
                </div>
                <div className='sidebar-line two'></div>
            </div>
        );
    } else {
        return (
            <motion.div
                initial={{ x: '-20vw' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='sidebar-container'
            >
                <div className="sidebar-line one"></div>
                <div className='sidebar-icons'>
                    {Object.keys(socialIcons).map((name, index) => (
                        <LinkIcon
                            key={index}
                            icon={socialIcons[name].icon}
                            link={socialIcons[name].link}
                        />
                    ))}
                </div>
                <div className='sidebar-line two'></div>
            </motion.div>
        );
    }
};

export default SideBar;
