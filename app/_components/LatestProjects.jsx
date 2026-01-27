'use client'
import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import { MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsData } from '../assets/data';
import SideBarDot from './Shared/SideBarDot';
import { LuBriefcaseBusiness } from 'react-icons/lu';
import Link from 'next/link';
import { colorClasses } from '@/utils/colorClass';

export default function LatestProjects() {
    const sliderRef = useRef(null);
    const titleRefs = useRef([]);

    const setEqualHeight = () => {
        let maxHeight = 0;
        titleRefs.current.forEach((el) => {
            if (el) {
                el.style.height = "auto";
                maxHeight = Math.max(maxHeight, el.offsetHeight);
            }
        });
        titleRefs.current.forEach((el) => {
            if (el) el.style.height = `${maxHeight}px`;
        });
    };

    useEffect(() => {
        setTimeout(setEqualHeight, 100);
        setEqualHeight();
        window.addEventListener("resize", setEqualHeight);
        return () => window.removeEventListener("resize", setEqualHeight);
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        arrows: false,
        slidesToShow: 1.9,
        centerPadding: "200px",
        afterChange: () => setTimeout(setEqualHeight, 0),
        responsive: [
            { breakpoint: 1440, settings: { slidesToShow: 1, centerPadding: "120px" } },
            { breakpoint: 1280, settings: { slidesToShow: 1, centerPadding: "120px" } },
            { breakpoint: 991, settings: { slidesToShow: 1, centerPadding: "100px" } },
            { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "40px" } },
        ],
    };

    const projectCards = projectsData?.map((project, index) => {
        const selectedColor = colorClasses[project.color] ?? colorClasses.blue;

        return (
            <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="w-full h-full flex items-start justify-start"
            >
                <div className="w-full h-full relative group bg-slate-200 hover:bg-slate-300 transition-all duration-300 rounded-xl p-4 overflow-hidden hover:shadow-md">

                    <div className="h-full w-full flex flex-col gap-4">

                        {/* Header */}
                        <div className="w-full flex items-center justify-between">
                            <div className={`p-2.5 rounded-lg flex ${selectedColor.bg} ${selectedColor.text}`}>
                                <LuBriefcaseBusiness />
                            </div>

                            {project?.liveLink ? (
                                <Link href={project.liveLink}>
                                    <div className="p-2.5 bg-slate-300 group-hover:bg-slate-400 rounded-lg flex text-gray-700 hover:scale-105 transition-transform">
                                        <MdArrowOutward fontSize={12} />
                                    </div>
                                </Link>
                            ) : (
                                <a href={project?.gitHubLink}>
                                    <div className="p-2.5 bg-slate-300 group-hover:bg-slate-400 rounded-lg flex text-gray-700 hover:scale-105 transition-transform">
                                        <RiGithubLine fontSize={12} />
                                    </div>
                                </a>
                            )}
                        </div>

                        {/* Content */}
                        <div className="w-full flex flex-col justify-between flex-1 gap-2">

                            <h6
                                ref={(el) => (titleRefs.current[index] = el)}
                                className="w-full text-sm lg:text-base line-clamp-2 text-gray-800 font-semibold"
                            >
                                {project?.name}
                            </h6>

                            <div className="w-full flex flex-col gap-2">
                                {project?.description && (
                                    <p className="line-clamp-3 text-xs lg:text-sm text-gray-600 leading-snug">
                                        {project.description}
                                    </p>
                                )}

                                {project.technologies.length > 0 && (
                                    <div className="w-full flex flex-wrap justify-end gap-1.5 pt-1">
                                        {project.technologies.map((technology, idx) => (
                                            <span
                                                key={idx}
                                                className={`text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/60 ${selectedColor.text}`}
                                            >
                                                #{technology.name}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <section className='section-component latest-projects'>
            <SideBarDot />

            {/* Heading */}
            <div
                className='flex flex-col items-start justify-start gap-1.5'
                data-aos="fade-up"
            >
                <h4 className='section-heading mb-0'>Latest Projects</h4>
                <p className='section-subheading'>Experience I've in Development</p>
            </div>

            <div className="project-slider relative w-full mt-5 lg:mt-6 mb-5 lg:mb-6">
                <div className="gradient left-gradient" />
                <Slider ref={sliderRef} {...sliderSettings}>
                    {projectCards}
                </Slider>
                <div className="gradient right-gradient" />
            </div>

            <div className='flex items-center justify-end gap-4'>
                <button onClick={() => sliderRef.current.slickPrev()} className='bg-slate-300 rounded-full p-2 hover:bg-slate-400 text-gray-700'>
                    <MdChevronLeft fontSize={16} />
                </button>

                <button onClick={() => sliderRef.current.slickNext()} className='bg-slate-300 rounded-full p-2 hover:bg-slate-400 text-gray-700'>
                    <MdChevronRight fontSize={16} />
                </button>
            </div>
        </section>
    )
}
