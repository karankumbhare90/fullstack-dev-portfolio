import { MdWork, MdDoneAll, MdLayers, MdCode } from "react-icons/md";

export const AboutMeData = {
    heading: `About Me`,
    description: `I'm a Fullstack Developer with a year of experience specializing in creating websites using MERN stack technologies. I've successfully completed various projects, delivering efficient and user-friendly applications. My expertise lies in building modern web solutions with a focus on functionality and design.`,
    aboutHighlights: [
        {
            id: 1,
            title: "1+ Years of Experience",
            description: "Building modern web applications using MERN stack.",
            color: "blue",
            icon: MdWork,
        },
        {
            id: 2,
            title: "5+ Projects Completed",
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
    ]
}
