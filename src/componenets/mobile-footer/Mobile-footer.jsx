import './Mobile-footer.css';
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { socials } from "../../utils/data";
import LinkIcon from "../link-icon/Link-icon";

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


const MobileFooter = () => {
    return (
        <div className='mobile-footer'>
            <div className='mobile-footer-icons'>
                {Object.keys(socialIcons).map((name, index) => (
                    <LinkIcon
                        key={index}
                        icon={socialIcons[name].icon}
                        link={socialIcons[name].link}
                    />
                ))}
            </div>
        </div>
    )
};

export default MobileFooter;