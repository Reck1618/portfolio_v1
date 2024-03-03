import { TbBrandGithub } from "react-icons/tb";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { socials } from "../../utils/data";
import './Side-bar.css'

const SideBar = () => {
    return (
    <div className="sidebar-container">
        <div className="sidebar-icons">
            <a href={socials.Github} target='_blank'>
                <span><TbBrandGithub /></span>
            </a>
            <a href={socials.Linkedin} target='_blank'>
                <span><FaLinkedinIn /></span>
            </a>
            <a href={socials.Instagram} target='_blank'>
                <span><FaInstagram /></span>
            </a>
            <a href={socials.X} target='_blank'>
                <span><FaXTwitter /></span>
            </a>
        </div>
        <div className="sidebar-line"></div>
    </div>
    )
};

export default SideBar;