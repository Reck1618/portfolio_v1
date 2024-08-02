import shirt_img from '../assets/images/3dshirt.png';
import sushi_img from '../assets/images/sushi.png';
import testauto_img from '../assets/images/testauto.png';
import aws from '../assets/svg/aws.svg';
import Bash from '../assets/svg/bash.svg';
import cicd from '../assets/svg/ci-cd.svg';
import css from '../assets/svg/css.svg';
import django from '../assets/svg/django.svg';
import docker from '../assets/svg/docker.svg';
import git from '../assets/svg/git.svg';
import Github from '../assets/svg/github.svg';
import html from '../assets/svg/html.svg';
import js from '../assets/svg/js.svg';
import mongo from '../assets/svg/mongo-db.svg';
import nginx from '../assets/svg/nginx.svg';
import python from '../assets/svg/python.svg';
import react from '../assets/svg/react.svg';
import redis from '../assets/svg/redis.svg';
import redux from '../assets/svg/redux.svg';
import restApi from '../assets/svg/rest-api.svg';
import selenium from '../assets/svg/selenium.svg';
import sql from '../assets/svg/sql.svg';
import ansible from '../assets/svg/ansible.svg';
import firebase from '../assets/svg/firebase.svg';
import gcloud from '../assets/svg/gcloud.svg';
import threejs from '../assets/svg/threejs.svg';
import openai from '../assets/svg/openai.svg';
import nodejs from '../assets/svg/nodejs.svg';
import cert from '../assets/certificate/cert.pdf';

export const socials = {
    Github: 'https://github.com/Reck1618',
    Linkedin: 'https://www.linkedin.com/in/ritik-tyagi-40b581226/',
    Instagram: 'https://www.instagram.com/_reck_26/',
    X: 'https://twitter.com/ritiktyagi26'
}

export const profileInfo = {
    name: "Ritik Tyagi",
    role: "Fullstack Developer",
    greeting: "Hi! my name is",
    email: "ritiktyagi1.618@gmail.com"
};

export const experianceData = [
    {
        title: 'Software Engineer',
        company: 'Mindfire Digital',
        duration: 'April 2023 - Present',
        description: 'Developed and deployed a python based web application for test automation management. In 12 weeks, improved test execution time by 40% and reduced costs by 60%. Within 6 months, provided users with a more intuitive interface, enhancing ease of use.',
        responsabilities: [
            'Designing, coding, testing, and documenting procedures.',
            'Finding bugs and fixing them to ensure the software quality.',
            'Optimizing code for performance and scalability.',
            'Constantly developing the user experience by adding new features.',
            'Analysing system and client requirements.',
            'Participating in agile sprint planning, daily standups, and sprint reviews.',
        ]
    },
    {
        title: 'Associate Software Engineer',
        company: 'Mindfire Digital',
        duration: 'July 2022 - March 2023',
        description: 'Collaborated with cross-functional teams to design, develop, and maintain web services and APIs that integrated with multiple internal systems, resulting in increase in data accuracy and reduction in data retrival time.',
        responsabilities: [
            'Writing high-quality code and meeting quality standards.',
            'Running and debugging existing code to determine, and solve errors.',
            'Creating technical documentation such as diagrams and flowcharts.',
            'Performing unit, integration, and automation testing.',
            'Improving the software engineering processes and practices.',
            'Utilized source control, automation tools, and CI/CD processes.'
        ]
    }
]

export const skillsData = [
    {
        type: 'Backend',
        skills: [
            { 'Python': python },
            { 'Django': django },
            { 'REST API': restApi },
            { 'Docker': docker },
            { 'Nginx': nginx },
            { 'Ansible': ansible },
            { 'AWS': aws },
            { 'Bash': Bash },
        ]
    },
    {
        type: 'Frontend',
        skills: [
            { 'JavaScript': js },
            { 'React': react },
            { 'Redux': redux },
            { 'HTML': html },
            { 'CSS': css },
        ]
    },
    {
        type: 'Others',
        skills: [
            { 'Selenium': selenium },
            { 'MongoDB': mongo },
            { 'Firebase': firebase },
            { 'SQL': sql },
            { 'Redis': redis },
            { 'Git': git },
            { 'Github': Github },
            { 'CI/CD': cicd },
        ]
    }
];


export const projectsData = [
    {
        name: "TestAuto",
        image: testauto_img,
        summary: "A test automation platform that streamlines execution, debugging, scheduling, and reporting with videos and screenshots. It also supports a wide range of oper",
        details: "A test automation platform that streamlines execution, debugging, scheduling, and reporting with videos and screenshots. It also supports a wide range of operating systems and devices for running tests.",
        features: ["Execution & Debugging", "Scheduling & Reporting", "Cross-Platform Support", "Automated Email Reports", "Videos & Screenshots", "Live Test Details", "Concurrency", "Authentication", "Authorization"],
        live: "https://automation.ritiktyagi.codes",
        url: "https://github.com/Reck1618/automation-dashboard",
        skills: [
        { 'Python': python },
        { 'Django': django },
        { 'HTML': html },
        { 'CSS': css },
        { 'JavaScript': js },
        { 'Nginx': nginx },
        { 'GCP': gcloud },
        { 'SQL': sql },
        { 'Redis': redis },
        { 'CI/CD': cicd }]
    },
    {
        name: "EFashion",
        image: shirt_img,
        summary: "EFashion is a responsive e-commerce store built with React for selling clothing and other style accessories online. The site features user authentication, a ",
        details: "EFashion is a responsive e-commerce store built with React for selling clothing and other style accessories online. The site features user authentication, a dedicated cart, payment integration, and a wishlist for a seamless shopping experience.",
        features: ["This app has a feature", "This app has a feature", "This app has a feature"],
        live: "https://https://ecom.ritiktyagi.codes",
        url: "https://github.com/Reck1618/ecommerce-website-react",
        skills: [{ 'Python': python },
        { 'Django': django },
        { 'REST API': restApi },
        { 'Docker': docker },
        { 'Nginx': nginx },
        { 'AWS': aws },
        { 'Bash': Bash }]
    },
    {
        name: "3Design",
        image: shirt_img,
        summary: "3Design is a React app for designing 3D t-shirts with Three.js. It features AI-generated logos and customizable colors. The app offers an interact",
        details: "3Design is a React app for designing 3D t-shirts with Three.js. It features AI-generated logos and customizable colors. The app offers an interactive and immersive experience for creating personalized t-shirt designs.",
        features:["AI-Generated Logos", "Customizable Colors", "Interactive 3D Model", "User-Friendly", "Immersive Experience", "Responsive Design"],
        live: "https://3d-tshirt.ritiktyagi.codes",
        url: "https://github.com/Reck1618/3D_react_website",
        skills: [
        { 'React': react },
        { 'Redux': redux },
        { 'JavaScript': js },
        { 'Node.js': nodejs },
        { 'Three.js': threejs },
        { 'HTML': html },
        { 'CSS': css },
        { 'Nginx': nginx },
        { 'AWS': aws },
        { 'OpenAI': openai },
        ]
    },
    {
        name: "SushiMan",
        image: sushi_img,
        summary: "Sushiman is a responsive sushi restaurant landing page using HTML, CSS, and JavaScript. The design showcases a modern aesthetic with smooth animations and intu",
        details: "Sushiman is a responsive sushi restaurant landing page using HTML, CSS, and JavaScript. The design showcases a modern aesthetic with smooth animations and intuitive navigation, optimized for a seamless user experience on all devices.",
        features: ["Responsive Design", "Smooth Animations", "User-Friendly", "Optimized for All Devices", "Modern Aesthetic"],
        live: "https://sushi.ritiktyagi.codes",
        url: "https://github.com/Reck1618/Restaurant_website",
        skills: [
        { 'JavaScript': js },
        { 'HTML': html },
        { 'CSS': css },
        { 'Nginx': nginx },
        { 'AWS': aws },
        ]
    },
];

export const certificatesData = [
    {
        title: 'Meta Front-End Developer',
        pdf: cert,
        url: 'https://coursera.org/share/74ca9add98c2405b40c3cdf1c2439e26'
    },
    {
        title: 'Meta Back-End Developer',
        pdf: cert,
        url: 'https://coursera.org/share/8f2a3c2433760f51e1b4a715ea98929e'
    },
    {
        title: 'Advanced Django: Mastering Django and Django Rest Framework',
        pdf: cert,
        url: 'https://coursera.org/share/b8fb795eccbe432c87ad48d300a24624'
    },
    {
        title: 'Django for Beginners',
        pdf: cert,
        url: 'https://www.google.com'
    },
    {
        title: 'Django for Beginners',
        pdf: cert,
        url: 'https://www.google.com'
    },
    {
        title: 'Django for Beginners',
        pdf: cert,
        url: 'https://www.google.com'
    },
    {
        title: 'Django for Beginners',
        pdf: cert,
        url: 'https://www.google.com'
    },
    {
        title: 'Django for Beginners',
        pdf: cert,
        url: 'https://www.google.com'
    },
    {
        title: 'Django for Beginners',
        pdf: cert,
        url: 'https://www.google.com'
    },
    {
        title: 'Django for Beginners',
        pdf: cert,
        url: 'https://www.google.com'
    },
    {
        title: 'Django for Beginners',
        pdf: cert,
        url: 'https://www.google.com'
    },
    {
        title: 'Django for Beginners',
        pdf: cert,
        url: 'https://www.google.com'
    }
];
