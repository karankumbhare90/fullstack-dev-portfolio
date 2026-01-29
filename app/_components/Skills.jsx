import Image from 'next/image'
import React from 'react'
import SideBarDot from './Shared/SideBarDot'
import { SkillsData } from '../assets/skills'

export default function Skills() {

    const { heading, description, skillsObj } = SkillsData;

    return (
        <section className='section-component skills'>
            <SideBarDot />

            {/* Heading */}
            <div
                className='flex flex-col items-start justify-start gap-1.5'
                data-aos="fade-up"
            >
                {heading && <h4 className="section-heading">{heading}</h4>}
                {description && <p className="text-gray-500 leading-5 text-sm mb-0">{description}</p>}
            </div>

            {skillsObj && skillsObj.length > 0 &&
                <>
                    <div className="mt-5 lg:mt-6 skills-wrapper relative">
                        <div className="gradient left-gradient sm:hidden" />
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
                    <div className="mt-4 skills-wrapper reverse sm:hidden">
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
                </>
            }
        </section>
    )
}
