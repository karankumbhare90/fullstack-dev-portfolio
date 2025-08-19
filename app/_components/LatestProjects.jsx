'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { MdArrowOutward } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsData } from '../assets/data';

export default function LatestProjects() {
    const [isMobile, setIsMobile] = useState(false);

    // const colors = ['yellow', 'green', 'red', 'blue', 'purple', 'pink', 'orange', 'cyan']

    // // Utility to get random color
    // const getRandomColor = () => {
    //     const color = colors[Math.floor(Math.random() * colors.length)]
    //     return `${color}`
    // }

    useEffect(() => {
        const checkWidth = () => setIsMobile(window.innerWidth < 1024)
        checkWidth()
        window.addEventListener('resize', checkWidth)
        return () => window.removeEventListener('resize', checkWidth)
    }, [])

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '100px',
        arrows: false,
    }

    const projectCards = projectsData?.map((project, index) => (
        <div className='flex items-start justify-start' key={index}>
            <div className='w-full h-full bg-[var(--gray-color-1)] hover:bg-[var(--primary-color-1)] transition-all duration-300 rounded-md p-4 relative group'>
                {/* Link */}
                {project?.liveLink && (
                    <a href='#' className='cursor-pointer absolute right-4 top-4'>
                        <div className='relative group p-1.5 bg-[var(--secondary-color-2)] hover:bg-[var(--secondary-color-3)] rounded-full flex items-center justify-center gap-1.5'>
                            <MdArrowOutward className='text-[var(--secondary-color-4)] group-hover:text-[var(--gray-color-6)]' fontSize={12} />
                        </div>

                    </a>
                )}
                <div className="w-full flex flex-col items-start justify-start">
                    <div className='size-16 lg:size-24 overflow-hidden relative'>
                        <Image src={project?.projectCoverImage} alt={project?.name} fill className='w-full h-full object-cover rounded-md' />
                    </div>
                    <div className='mt-4'>
                        <h6 className='!text-lg'>{project?.name}</h6>
                        {project?.description && (<p className='line-clamp-2 !text-sm mt-2.5'>{project?.description}</p>)}
                        {project?.gitHubLink || project.technologies.length > 0 && (<div className='mt-4'>
                            <div className='button-group flex items-center justify-start gap-2.5'>
                                {project?.gitHubLink && (<a href={project?.gitHubLink} className='cursor-pointer flex items-center justify-start gap-2'>
                                    <div className='relative group p-1.5 bg-[var(--secondary-color-2)] hover:bg-[var(--secondary-color-3)] rounded-full flex items-center justify-center gap-1.5'>
                                        <RiGithubLine className='text-[var(--secondary-color-5)] group-hover:text-[var(--gray-color-6)]' fontSize={12} />
                                    </div>
                                    <span className='!text-sm text-[var(--secondary-color-5)]'>GitHub</span>
                                </a>)}

                                <div className='flex flex-1 items-center justify-end gap-1.5 relative'>
                                    <div className='absolute h-full w-1/6 right-0 bg-gradient-to-l from-[var(--gray-color-1)] group-hover:from-[var(--primary-color-1)] transition-all duration-300 to-transparent' />
                                    {
                                        project?.technologies?.map((technology, idx) => (
                                            <span
                                                key={idx}
                                                className={`text-xs text-[var(--secondary-color-6)] font-semibold px-1 py-0.5 rounded text-blue-600 flex items-center justify-center`}
                                            >
                                                #{technology?.name}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div className='lg:pl-10 lg:border-l border-[var(--gray-color-2)] relative latest-projects pb-10'>
            <div className='absolute h-7 w-7 rounded-full -left-4 top-0 hidden lg:flex items-center justify-center shadow-1 bg-[var(--gray-color-1)]'>
                <span className='h-3 w-3 rounded-full bg-[var(--secondary-color-6)]'></span>
            </div>
            <h4 className='relative' data-aos="fade-up">Latest Projects</h4>
            <div className="project-slider w-full mt-6 relative">
                <div className='pointer-events-none lg:hidden z-10 absolute h-full w-1/6 left-0 top-0 bg-gradient-to-r from-[var(--primary-background)] to-transparent' />
                <div className='pointer-events-none lg:hidden z-10 absolute h-full w-1/6 right-0 top-0 bg-gradient-to-l from-[var(--primary-background)] to-transparent' />
                {isMobile ? (
                    <Slider {...sliderSettings}>
                        {projectCards}
                    </Slider>
                ) : (
                    <div className='mt-4 grid lg:grid-cols-3 xl:gridc-cols-4 items-center items-stretch justify-between sm:-mx-3 lg:-mb-6'>
                        {[1, 2, 3].map((item, index) => (
                            <div key={index} className='relative w-full mb-6 sm:px-3' data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                                {projectCards[index]}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
