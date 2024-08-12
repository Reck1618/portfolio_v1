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
import swagger from '../assets/svg/swagger.svg';

export const socials = {
    Github: 'https://github.com/Reck1618',
    Linkedin: 'https://www.linkedin.com/in/26-ritik-tyagi',
    Instagram: 'https://www.instagram.com/_reck_26/',
    X: 'https://twitter.com/ritiktyagi26'
}

export const profileInfo = {
    name: "Ritik Tyagi",
    role: "Fullstack Developer",
    greeting: "Hi! my name is",
    email: "ritiktyagi262000@gmail.com"
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
            { 'Swagger': swagger },
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
        features: ["Execution & Debugging", "Scheduling & Reporting", "Cross-Platform Support", "Automated Email Reports", "Videos & Screenshots", "Live Test Details", "Concurrency & Queueing", "Authentication", "Authorization"],
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
        name: "Little-Lemon API",
        image: shirt_img,
        summary: "Little Lemon is a REST API for a restaurant delivery management system built with Django and Django Rest Framework. It features user auth",
        details: "Little Lemon is a REST API for a restaurant delivery management system built with Django and Django Rest Framework. It features menu management, order processing, delivery management, user authentication and role-based access control for a seamless experience.",
        features: ["Menu Management", "Order Processing", "Delivery Management", "API Documentation", "Search & Filtering", "Swagger UI", "Role-based access control","Custom Permissions", "User Authentication"],
        live: "https://api-lemon.ritiktyagi.codes",
        url: "https://github.com/Reck1618/Restaurant-API",
        skills: [
        { 'Python': python },
        { 'Django': django },
        { 'REST API': restApi },
        { 'Swagger': swagger },
        { 'Docker': docker },
        { 'Nginx': nginx },
        { 'AWS': aws },
        { 'Bash': Bash },
        { 'SQL': sql },
        { 'CI/CD': cicd }]
    },
    {
        name: "3Design",
        image: shirt_img,
        summary: "3Design is a React app for designing 3D t-shirts with Three.js. It features AI-generated logos, customizable colors, and a 3d tshirt model. The app offers an in",
        details: "3Design is a React app for designing 3D t-shirts with Three.js. It features AI-generated logos, customizable colors, and a 3d tshirt model. The app offers an interactive and immersive experience for creating personalized t-shirt designs.",
        features:["AI-Generated Designs", "Customizable Colors", "Interactive 3D Model", "Immersive Experience", "Responsive Design", "User-Friendly", "Upload Custom Logos", "Save & Share Designs"],
        live: "https://3d-tshirt.ritiktyagi.codes",
        url: "https://github.com/Reck1618/3D_react_website",
        skills: [
        { 'React': react },
        { 'Redux': redux },
        { 'JavaScript': js },
        { 'HTML': html },
        { 'CSS': css },
        { 'Node.js': nodejs },
        { 'Three.js': threejs },
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
    // {
    //     name: "EFashion",
    //     image: shirt_img,
    //     summary: "EFashion is a responsive e-commerce store built with React for selling clothing and other style accessories online. The site features user authentication, a ",
    //     details: "EFashion is a responsive e-commerce store built with React for selling clothing and other style accessories online. The site features user authentication, a dedicated cart, payment integration, and a wishlist for a seamless shopping experience.",
    //     features: ["This app has a feature", "This app has a feature", "This app has a feature"],
    //     live: "https://https://ecom.ritiktyagi.codes",
    //     url: "https://github.com/Reck1618/ecommerce-website-react",
    //     skills: [{ 'Python': python },
    //     { 'Django': django },
    //     { 'REST API': restApi },
    //     { 'Docker': docker },
    //     { 'Nginx': nginx },
    //     { 'AWS': aws },
    //     { 'Bash': Bash }]
    // },
];

export const certificatesData = [
    {
        title: 'Back-End Developer Specialization',
        pdf: '/assets/certificate/META Back-End Developer.pdf',
        provider: 'META',
    },
    {
        title: 'Front-End Developer Specialization',
        pdf: '/assets/certificate/META Front-End Developer.pdf',
        provider: 'META',
    },
    {
        title: 'Advanced Django Specialization',
        pdf: '/assets/certificate/Advance Django.pdf',
        provider: 'CODIO'
    },
    {
        title: 'AWS Cloud Technical Essentials',
        pdf: '/assets/certificate/AWS Cloud Technical Essentials.pdf',
        provider: 'AWS'
    },
    {
        title: 'Migrating to the AWS Cloud',
        pdf: '/assets/certificate/Migrating to the AWS Cloud.pdf',
        provider: 'AWS',
    },
    {
        title: 'Mastering Ansible Automation',
        pdf: '/assets/certificate/Mastering Ansible Automation.pdf',
        provider: 'CODIO',
    },
    {
        title: 'Unix System Basics',
        pdf: '/assets/certificate/Unix System Basics.pdf',
        provider: 'CODIO',
    },
    {
        title: 'Version Control',
        pdf: '/assets/certificate/Version Control.pdf',
        provider: 'META',
    },
    {
        title: 'CI-CD for Software Developers',
        pdf: '/assets/certificate/CI-CD for Software Developers.pdf',
        provider: 'CODIO'
    },
    {
        title: 'Django External APIs and Task Queuing',
        pdf: '/assets/certificate/Advanced Django: External APIs and Task Queuing.pdf',
        provider: 'CODIO'
    },
    {
        title: 'Programming in Python',
        pdf: '/assets/certificate/Programming in Python.pdf',
        provider: 'META',
    },
    {
        title: 'Programming with JavaScript',
        pdf: '/assets/certificate/Programming with JavaScript.pdf',
        provider: 'META',
    },
    {
        title: 'Advanced React',
        pdf: '/assets/certificate/Advanced React.pdf',
        provider: 'META'
    },
    {
        title: 'APIs',
        pdf: '/assets/certificate/APIs.pdf',
        provider: 'META'
    },
    {
        title: 'Advanced Django Rest Framework',
        pdf: '/assets/certificate/Advanced Django: Advanced Django Rest Framework.pdf',
        provider: 'CODIO'
    },
    {
        title: 'Django Building a Blog',
        pdf: '/assets/certificate/Advanced Django: Building a Blog.pdf',
        provider: 'CODIO'
    },
    {
        title: 'Introduction to Django Rest Framework',
        pdf: '/assets/certificate/Advanced Django: Introduction to Django Rest Framework.pdf',
        provider: 'CODIO'
    },
    {
        title: 'Blockchain Basics',
        pdf: '/assets/certificate/Blockchain Basics.pdf',
        provider: 'UB'
    },
    {
        title: 'Database Structures and Management with MySQL',
        pdf: '/assets/certificate/Database Structures and Management with MySQL.pdf',
        provider: 'META',
    },
    {
        title: 'Django Web Framework',
        pdf: '/assets/certificate/Django Web Framework.pdf',
        provider: 'META',
    },
    {
        title: 'Front-End Developer Capstone',
        pdf: '/assets/certificate/Front-End Developer Capstone.pdf',
        provider: 'META',
    },
    {
        title: 'HTML and CSS in depth',
        pdf: '/assets/certificate/HTML and CSS in depth.pdf',
        provider: 'META',
    },
    {
        title: 'Introduction to Back-End Development',
        pdf: '/assets/certificate/Introduction to Back-End Development.pdf',
        provider: 'META',
    },
    {
        title: 'Introduction to Databases',
        pdf: '/assets/certificate/Introduction to Databases.pdf',
        provider: 'META',
    },
    {
        title: 'Introduction to Databases for Back-End Development',
        pdf: '/assets/certificate/Introduction to Databases for Back-End Development.pdf',
        provider: 'META',
    },
    {
        title: 'Introduction to Front-End Development',
        pdf: '/assets/certificate/Introduction to Front-End Development.pdf',
        provider: 'META',
    },
    {
        title: 'Principles of UX-UI Design',
        pdf: '/assets/certificate/Principles of UX-UI Design.pdf',
        provider: 'META',
    },
    {
        title: 'Coding Interview Preparation',
        pdf: '/assets/certificate/Coding Interview Preparation.pdf',
        provider: 'META'
    },
    {
        title: 'React Basics',
        pdf: '/assets/certificate/React Basics.pdf',
        provider: 'META',
    },
    {
        title: 'Back-End Developer Capstone',
        pdf: '/assets/certificate/Back-End Developer Capstone.pdf',
        provider: 'META'
    },
    {
        title: 'The Full Stack',
        pdf: '/assets/certificate/The Full Stack.pdf',
        provider: 'META',
    }
];
