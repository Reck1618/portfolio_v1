import project1_img from '../assets/images/project.png';
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
// import celery from '../assets/svg/celery.svg';
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
        description: 'Developed and deployed a Python-based web application for test automation that integrated data from multiple sources, resulting in a 25% increase in development speed and a 20% reduction in application development cost.',
        responsabilities: [
            'Designing, coding, testing, and documenting procedures.',
            'Finding bugs and fixing them to ensure the software quality.',
            'Optimizing code for performance and scalability',
            'Constantly developing the user experience by adding new features',
            'Analysing technical documentation, and client requirements',
            'Participating in the development and delivery of client solutions',
        ]
    },
    {
        title: 'Associate Software Engineer',
        company: 'Mindfire Digital',
        duration: 'July 2022 - March 2023',
        description: 'Collaborated with cross-functional teams to design , develop, and maintain a RESTful API that integrated with multiple internal systems, resulting in increase in data accuracy and reduction in data retrival time.',
        responsabilities: [
            'Writing high-quality code and meeting quality standards',
            'Running and debugging existing code to determine, and solve errors',
            'Creating technical documentation such as diagrams and flowcharts',
            'Performing unit and integration testing',
            'Improving the software engineering processes and practices',
            'Learning new technologies and finding out about industry trends'
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
        image: project1_img,
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industr hello world",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        features: ["This app has a feature", "This app has a feature", "This app has a feature", "This app has a feature", "This app has a feature", "This app has a feature"],
        live: "https://www.google.com",
        url: "https://www.google.com",
        skills: [{ 'Python': python },
        { 'Django': django },
        { 'REST API': restApi },
        { 'Docker': docker },
        { 'Nginx': nginx },
        { 'AWS': aws },
        { 'Bash': Bash },
        { 'React': react },
        { 'Redux': redux },
        { 'SQL': sql },
        { 'Firebase': firebase },
        { 'Git': git },
        { 'Github': Github },
        { 'CI/CD': cicd }]
    },
    {
        name: "E-commerce Website",
        image: project1_img,
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry hello world",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        features: ["This app has a feature", "This app has a feature", "This app has a feature"],
        live: "https://www.google.com",
        url: "https://www.google.com",
        skills: [{ 'Python': python },
        { 'Django': django },
        { 'REST API': restApi },
        { 'Docker': docker },
        { 'Nginx': nginx },
        { 'AWS': aws },
        { 'Bash': Bash }]
    },
    {
        name: "Project 3",
        image: project1_img,
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        features: ["This app has a feature", "This app has a feature", "This app has a feature", "This app has a feature", "This app has a feature", "This app has a feature"],
        live: "https://www.google.com",
        url: "https://www.google.com",
        skills: [{ 'Python': python },
        { 'Django': django },
        { 'REST API': restApi },
        { 'Docker': docker },
        { 'Nginx': nginx },
        { 'AWS': aws },
        { 'Bash': Bash }]
    },
    {
        name: "Project 4",
        image: project1_img,
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        features: ["This app has a feature", "This app has a feature", "This app has a feature"],
        live: "https://www.google.com",
        url: "https://www.google.com",
        skills: [{ 'Python': python },
        { 'Django': django },
        { 'REST API': restApi },
        { 'Docker': docker },
        { 'Nginx': nginx },
        { 'AWS': aws },
        { 'Bash': Bash }]
    },
    {
        name: "Project 3",
        image: project1_img,
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        features: ["This app has a feature", "This app has a feature", "This app has a feature"],
        live: "https://www.google.com",
        url: "https://www.google.com",
        skills: [{ 'Python': python },
        { 'Django': django },
        { 'REST API': restApi },
        { 'Docker': docker },
        { 'Nginx': nginx },
        { 'AWS': aws },
        { 'Bash': Bash }]
    },
    {
        name: "Project 4",
        image: project1_img,
        summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        features: ["This app has a feature", "This app has a feature", "This app has a feature"],
        live: "https://www.google.com",
        url: "https://www.google.com",
        skills: [{ 'Python': python },
        { 'Django': django },
        { 'REST API': restApi },
        { 'Docker': docker },
        { 'Nginx': nginx },
        { 'AWS': aws },
        { 'Bash': Bash }]
    }
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
