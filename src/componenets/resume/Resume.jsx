import './Resume.css';
import Resume from '../../assets/resume/Ritik_dev.pdf';

const ResumeButton = () => {
    const downloadResume = () => {
        // Replace 'path_to_resume.pdf' with the path to your resume file
        const resumeUrl = Resume;
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button id='resume' className='download-resume-button' onClick={downloadResume}>Resume</button>
    );
};

export default ResumeButton;
