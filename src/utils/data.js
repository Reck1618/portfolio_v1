import project1_img from '../assets/project.png';
import skill_img from '../assets/skill.svg';

export const socials = {
    Github: 'https://github.com/Reck1618',
    Linkedin: 'https://www.linkedin.com/in/ritik-tyagi-40b581226/',
    Instagram: 'https://www.instagram.com/_reck_26/',
    X: 'https://twitter.com/RitikTy86346533'
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
            {'Python': skill_img},
            {'NodeJS': skill_img},
            {'Express': skill_img},
            {'MongoDB': skill_img},
            {'REST API': skill_img}
        ]
    },

    {
        type: 'Frontend',
        skills: [
            {'HTML': skill_img},
            {'CSS': skill_img},
            {'JavaScript': skill_img},
            {'React': skill_img},
            {'Redux': skill_img},
            {'Material-UI': skill_img},
            {'Bootstrap': skill_img}
        ]
    },

    {
        type: 'Others',
        skills: [
            {'Git': skill_img},
            {'Docker': skill_img},
            {'Jenkins': skill_img},
            {'AWS': skill_img},
            {'Heroku': skill_img}
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
