import profileImage from '../../public/Profile-sm.jpg'

// Icons
import { IoLogoInstagram } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { FaEnvelope, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { BsEnvelope } from 'react-icons/bs';
import { MdCall } from 'react-icons/md';

export const topProfileData = {
    name: 'Karan Kumbhare',
    profileImage: profileImage,
    currentDesignation: 'Full-Stack Developer',
    quote: '<p className="quote">Code is today\'s <span>ink</span> for writing tomorrow !!</p>'
}

export const contactInfo = [
    {
        id: 0,
        label: "Email",
        icon: FaEnvelope,
        linkLabel: "karankumbhare90@gmail.com",
        link: "mailto:karankumbhare90@gmail.com"
    },
    {
        id: 1,
        label: "Phone",
        icon: MdCall,
        linkLabel: "+916352305914",
        link: "tel:+916352305914"
    },
    {
        id: 2,
        label: "Address",
        icon: FaLocationDot,
        linkLabel: "Surat, Gujarat",
        link: "Surat, Gujarat"
    },
]

export const socialLinks = [
    {
        id: 1,
        name: 'Instagram',
        handle: 'karankumbhare_',
        url: 'http://instagram.com/karankumbhare_',
        icon: IoLogoInstagram
    },
    {
        id: 2,
        name: 'GitHub',
        handle: 'karankumbhare90',
        url: 'http://github.com/karankumbhare90',
        icon: LuGithub
    },
    {
        id: 3,
        name: 'LinkedIn',
        handle: 'karankumbhare90',
        url: 'http://github.com/karankumbhare90',
        icon: FaLinkedinIn
    },
    {
        id: 4,
        name: 'LeetCode',
        handle: 'karankumbhare90',
        url: 'http://leetcode.com/u/karankumbhare90',
        icon: SiLeetcode
    }
]

export const experiences = [
    {
        companyName: 'Digiwhiz',
        companyImage: '',
        location: 'Ahmedabad, Gujarat',
        color: 'blue',
        experience: {
            position: 'Jr. Front-End Developer',
            startData: 'Aug 2025',
            endData: 'Present'
        }
    },
    {
        companyName: 'Digiwhiz',
        companyImage: '',
        location: 'Ahmedabad, Gujarat',
        color: 'emerald',
        experience: {
            position: 'Front-End Developer Trainee',
            startData: 'Jan 2025',
            endData: 'Aug 2025'
        }
    }
]

export const educationData = [
    {
        institute: "Government Polytechnic",
        degree: "Diploma in Computer Engineering",
        location: "Surat, Gujarat",
        startDate: "2020",
        endDate: "2023",
        color: "indigo",
    },
    {
        institute: "ABC College of Engineering",
        degree: "B.Tech in Computer Science",
        location: "Ahmedabad, Gujarat",
        startDate: "2023",
        endDate: "2026",
        color: "emerald",
    },
];


export const projectsData = [
    {
        id: 1,
        name: "Portfolio Website",
        description: "A personal portfolio website showcasing projects and skills.",
        gitHubLink: "https://github.com/username/portfolio",
        liveLink: "https://portfolio-demo.vercel.app",
        color: "blue",
        technologies: [
            { id: 1, name: "Next.js" },
            { id: 2, name: "Tailwind CSS" },
            { id: 3, name: "React JS" },
        ],
    },
    {
        id: 2,
        name: "E-commerce App",
        description: "A full-stack e-commerce application with cart and payment system.",
        gitHubLink: "https://github.com/username/ecommerce-app",
        liveLink: "https://ecommerce-demo.vercel.app",
        color: "emerald",
        technologies: [
            { id: 1, name: "React JS" },
            { id: 2, name: "Node JS" },
            { id: 3, name: "MongoDB" },
        ],
    },
    {
        id: 3,
        name: "Task Management System Dashboard Testing Happy Li Test",
        description: "A task management web app with authentication and CRUD features.",
        gitHubLink: "https://github.com/username/task-manager",
        liveLink: "https://taskmanager-demo.vercel.app",
        color: "violet",
        technologies: [
            { id: 1, name: "Vue.js" },
            { id: 2, name: "Express JS" },
            { id: 3, name: "PostgreSQL" },
        ],
    },
];



export const testimonialData = [
    {
        id: 1,
        name: "Rahul Sharma",
        image: "/person.jpg",
        rating: 5,
        quote: "Working with Karan was an absolute pleasure. He delivered the project on time and exceeded our expectations with clean, scalable code. Working with Karan was an absolute pleasure. He delivered the project on time and exceeded our expectations with clean, scalable code.",
    },
    {
        id: 2,
        name: "Ananya Verma",
        image: "/person.jpg",
        rating: 4,
        quote: "Great communication and strong technical skills. The UI was polished and performance optimized. Would definitely recommend!",
    },
    {
        id: 3,
        name: "Amit Patel",
        image: "/person.jpg",
        rating: 5,
        quote: "Karan understands requirements quickly and turns ideas into working solutions. Very professional and reliable developer.",
    },
    {
        id: 4,
        name: "Sneha Iyer",
        image: "/person.jpg",
        rating: 4,
        quote: "The project was delivered with excellent attention to detail. Loved the animations and responsiveness across devices.",
    },
    {
        id: 5,
        name: "Vikram Joshi",
        image: "/person.jpg",
        rating: 5,
        quote: "One of the best developers I’ve worked with. Clean architecture, fast delivery, and great post-launch support.",
    },
];

import { MdWork, MdDoneAll, MdLayers, MdCode } from "react-icons/md";

export const aboutHighlights = [
    {
        id: 1,
        title: "1+ Years of Experience",
        description: "Building modern web applications using MERN stack.",
        color: "blue",
        icon: MdWork,
    },
    {
        id: 2,
        title: "10+ Projects Completed",
        description: "Delivered real-world projects including dashboards, portfolios, and business websites.",
        color: "emerald",
        icon: MdDoneAll,
    },
    {
        id: 3,
        title: "MERN Stack Developer",
        description: "Specialized in MongoDB, Express, React, and Node.js for full-stack development.",
        color: "violet",
        icon: MdLayers,
    },
    {
        id: 4,
        title: "Clean & Scalable Code",
        description: "Focused on performance, responsiveness, and maintainable architecture.",
        color: "orange",
        icon: MdCode,
    },
];
