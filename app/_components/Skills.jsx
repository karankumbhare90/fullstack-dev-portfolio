import Image from 'next/image'
import React from 'react'
import SideBarDot from './Shared/SideBarDot'

export default function Skills() {

    const skillsObj = [
        { name: 'HTML', icon: '/icons/HTML5.svg', bgClass: 'hover:bg-orange-800/30' },
        { name: 'CSS', icon: '/icons/CSS3.svg', bgClass: 'hover:bg-blue-800/30' },
        { name: 'JavaScript', icon: '/icons/JavaScript.svg', bgClass: 'hover:bg-yellow-800/30' },
        { name: 'Bootstrap', icon: '/icons/Bootstrap.svg', bgClass: 'hover:bg-purple-800/30' },
        { name: 'React', icon: '/icons/React.svg', bgClass: 'hover:bg-sky-50/30' },
        { name: 'Tailwind CSS', icon: '/icons/Tailwind CSS.svg', bgClass: 'hover:bg-sky-800/30' },
        { name: 'Node JS', icon: '/icons/Node.js.svg', bgClass: 'hover:bg-green-800/30' },
        { name: 'Express', icon: '/icons/Express.svg', bgClass: 'hover:bg-gray-800/30' },
        { name: 'MongoDB', icon: '/icons/MongoDB.svg', bgClass: 'hover:bg-green-800/30' },
        { name: 'TypeScript', icon: '/icons/TypeScript.svg', bgClass: 'hover:bg-blue-800/30' },
        { name: 'Next JS', icon: '/icons/Next.js.svg', bgClass: 'hover:bg-gray-800/30' },
        { name: 'PostgreSQL', icon: '/icons/PostgresSQL.svg', bgClass: 'hover:bg-sky-800/30' },
    ]

    return (
        <section className='section-component skills'>
            <SideBarDot />

            {/* Heading */}
            <div
                className='flex flex-col items-start justify-start gap-1.5'
                data-aos="fade-up"
            >
                <h4 className='section-heading mb-0'>Skills</h4>
                <p className='section-subheading'>Experience I've in Development</p>
            </div>

            <div className="mt-5 lg:mt-6 skills-wrapper relative">
                <div className="gradient left-gradient sm:hidden" />
                {/* FIRST TRACK (right → left) */}
                <div className="skills-track sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-5">
                    {skillsObj.map((item, index) => (
                        <div key={index} className="skill-item">
                            <div className={`w-full h-full flex flex-col items-center justify-center bg-slate-200 transition-all duration-300 rounded-md p-4 gap-4 ${item.bgClass}`}>
                                <div className="relative overflow-hidden size-10">
                                    <Image src={item.icon} alt={item.name} fill className="object-contain" />
                                </div>
                                <span className="text-xs text-gray-500 text-center">{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-track sm:hidden">
                    {skillsObj.map((item, index) => (
                        <div key={`dup-${index}`} className="skill-item">
                            <div className={`w-full h-full flex flex-col items-center justify-center bg-slate-200 transition-all duration-300 rounded-md p-4 gap-4 ${item.bgClass}`}>
                                <div className="relative overflow-hidden size-10">
                                    <Image src={item.icon} alt={item.name} fill className="object-contain" />
                                </div>
                                <span className="text-xs text-gray-500 text-center">{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="gradient right-gradient sm:hidden" />
            </div>

            {/* SECOND SLIDER (left → right) */}
            <div className="mt-4 skills-wrapper reverse sm:hidden relative">
                <div className="gradient left-gradient sm:hidden" />
                <div className="reverse-track">
                    {skillsObj.map((item, index) => (
                        <div key={`rev-${index}`} className="skill-item">
                            <div className={`w-full h-full flex flex-col items-center justify-center bg-slate-200 transition-all duration-300 rounded-md p-4 gap-4 ${item.bgClass}`}>
                                <div className="relative overflow-hidden size-10">
                                    <Image src={item.icon} alt={item.name} fill className="object-contain" />
                                </div>
                                <span className="text-xs text-gray-500 text-center">{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-track reverse-track sm:hidden">
                    {skillsObj.map((item, index) => (
                        <div key={`rev-dup-${index}`} className="skill-item">
                            <div className={`w-full h-full flex flex-col items-center justify-center bg-slate-200 transition-all duration-300 rounded-md p-4 gap-4 ${item.bgClass}`}>
                                <div className="relative overflow-hidden size-10">
                                    <Image src={item.icon} alt={item.name} fill className="object-contain" />
                                </div>
                                <span className="text-xs text-gray-500 text-center">{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="gradient right-gradient sm:hidden" />
            </div>


        </section>
    )
}
