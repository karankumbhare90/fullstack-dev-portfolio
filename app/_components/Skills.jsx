import Image from 'next/image'
import React from 'react'
import { FaLink, FaLocationDot } from 'react-icons/fa6'

export default function Skills() {

    const skillsObj = [
        {
            name: 'HTML',
            icon: '/icons/HTML5.svg',
            bgClass: 'hover:bg-orange-100',
        },
        {
            name: 'CSS',
            icon: '/icons/CSS3.svg',
            bgClass: 'hover:bg-blue-100',
        },
        {
            name: 'JavaScript',
            icon: '/icons/JavaScript.svg',
            bgClass: 'hover:bg-yellow-100',
        },
        {
            name: 'Bootstrap',
            icon: '/icons/Bootstrap.svg',
            bgClass: 'hover:bg-purple-100',
        },
        {
            name: 'React',
            icon: '/icons/React.svg',
            bgClass: 'hover:bg-sky-50',
        },
        {
            name: 'Tailwind CSS',
            icon: '/icons/Tailwind CSS.svg',
            bgClass: 'hover:bg-sky-100',
        },
        {
            name: 'Node JS',
            icon: '/icons/Node.js.svg',
            bgClass: 'hover:bg-green-100',
        },
        {
            name: 'Express',
            icon: '/icons/Express.svg',
            bgClass: 'hover:bg-gray-100',
        },
        {
            name: 'MongoDB',
            icon: '/icons/MongoDB.svg',
            bgClass: 'hover:bg-green-200/80',
        },
        {
            name: 'TypeScript',
            icon: '/icons/TypeScript.svg',
            bgClass: 'hover:bg-blue-200',
        },
        {
            name: 'Next JS',
            icon: '/icons/Next.js.svg',
            bgClass: 'hover:bg-gray-200',
        },
        {
            name: 'PostgreSQL',
            icon: '/icons/PostgresSQL.svg',
            bgClass: 'hover:bg-sky-200',
        },
    ]


    return (
        <div className='lg:pl-10 lg:border-l border-[var(--gray-color-2)] relative skills pb-10'>
            <div className='absolute h-7 w-7 rounded-full -left-4 top-0 hidden lg:flex items-center justify-center shadow-1 bg-[var(--gray-color-1)]'>
                <span className='h-3 w-3 rounded-full bg-[var(--secondary-color-6)]'></span>
            </div>
            <h4 className='relative'>Skills</h4>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {skillsObj.map((item, index) => (
                    <div key={index} className={`relative`}>
                        <div className={`w-full flex flex-col items-center justify-center bg-[var(--gray-color-1)] transition-all duration-300 rounded-md p-5 gap-2 ${item.bgClass}`}>
                            <div className='relative overflow-hidden size-16'>
                                <Image src={item.icon} alt={item.name} fill className='object-contain' />
                            </div>
                            <span>{item.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
