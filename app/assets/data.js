import profileImage from '../../public/Profile-sm.jpg'

// Icons
import { IoLogoInstagram } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export const topProfileData = {
    name: 'Karan Kumbhare',
    profileImage: profileImage,
    currentDesignation: 'Full-Stack Developer',
    quote: 'Code is today\'s ink for writing tomorrow !!'
}

export const contactInfo = {
    email: 'karankumbhare90@gmail.com',
    phone: '+91 6352305914',
    address: 'Surat, Gujarat, India'
}

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
        location: 'Ahmedabad, Gujarat',
        experience: {
            position: 'Jr. Front-End Developer',
            startData: 'Aug 2025',
            endData: 'Present'
        }
    },
    {
        companyName: 'Digiwhiz',
        location: 'Ahmedabad, Gujarat',
        experience: {
            position: 'Front-End Developer Trainee',
            startData: 'Jan 2025',
            endData: 'Aug 2025'
        }
    }
]

export const projectsData = [
    {
        id: 1,
        name: 'Project Name',
        description: '',
        gitHubLink: '',
        liveLink: '',
        projectCoverImage: '',
        technologies: [
            {
                id: 1,
                name: 'React JS',
            },
            {
                id: 2,
                name: 'Node JS',
            },
            {
                id: 3,
                name: 'Mongo JS',
            }
        ]
    },
    {
        id: 1,
        name: 'Project Name',
        description: '',
        gitHubLink: '',
        liveLink: '',
        projectCoverImage: '',
        technologies: [
            {
                id: 1,
                name: 'React JS',
            },
            {
                id: 2,
                name: 'Node JS',
            },
            {
                id: 3,
                name: 'Mongo JS',
            }
        ]
    },
    {
        id: 1,
        name: 'Project Name',
        description: '',
        gitHubLink: '',
        liveLink: '',
        projectCoverImage: '',
        technologies: [
            {
                id: 1,
                name: 'React JS',
            },
            {
                id: 2,
                name: 'Node JS',
            },
            {
                id: 3,
                name: 'Mongo JS',
            }
        ]
    }
]
