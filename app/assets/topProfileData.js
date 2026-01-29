import profileImage from '../../public/Profile-sm.jpg'
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithub } from 'react-icons/fa6';

export const TopProfileData = {
    name: `Karan Kumbhare`,
    profileImage: profileImage,
    currentDesignation: 'Full-Stack Developer',
    quote: '<p className="quote">Code is today\'s <span>ink</span> for writing tomorrow !!</p>',
    linksData: [
        {
            id: 0,
            name: 'GitHub',
            link: 'https://github.com/karankumbhare90',
            icon: FaGithub,
        },
        {
            id: 1,
            name: 'CV',
            link: 'https://karankumbhare.netlify.app/assets/CV.pdf',
            icon: AiOutlineDownload,
        }
    ]
}