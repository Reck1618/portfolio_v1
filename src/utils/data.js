import project1_img from '../assets/images/project.png';
import aws from '../assets/svg/aws.svg';
import Bash from '../assets/svg/bash.svg';
import celery from '../assets/svg/celery.svg';
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
        title: 'Associate Software Engineer',
        company: 'Mindfire Digital',
        duration: 'July 2022 - Present',
        description: 'I am working as a fullstack developer at Mindfire Digital. I am responsible for developing and maintaining the web applications.'
    },
    {
        title: 'Intern',
        company: 'Mindfire Digital',
        duration: 'Jan 2022 - June 2022',
        description: 'I am working as a fullstack developer at Mindfire Digital. I am responsible for developing and maintaining the web applications.'
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
            { 'SQL': sql },
            { 'Redis': redis },
            { 'Git': git },
            { 'Github': Github },
            { 'Celery': celery },
            { 'CI/CD': cicd },
        ]
    }
];


export const projectsData = [
    {
        name: "Project 1",
        image: project1_img,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        live: "https://www.google.com",
        url: "https://www.google.com",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    {
        name: "Project 2",
        image: project1_img,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        live: "https://www.google.com",
        url: "https://www.google.com",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    {
        name: "Project 3",
        image: project1_img,
        description: "Project 3 description",
        live: "https://www.google.com",
        url: "https://www.google.com",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    {
        name: "Project 4",
        image: project1_img,
        description: "Project 4 description",
        live: "https://www.google.com",
        url: "https://www.google.com",
        skills: ["HTML", "CSS", "JavaScript"],
    }
];
