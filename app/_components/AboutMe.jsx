import React from 'react'
import SideBarDot from './Shared/SideBarDot'
import { colorClasses } from '@/utils/colorClass'
import { AboutMeData } from '../assets/about';


export default function AboutMe() {

    const { heading, description, aboutHighlights } = AboutMeData;

    return (
        <section className='section-component experience'>
            <SideBarDot />

            {/* Heading */}
            <div
                className='flex flex-col items-start justify-start gap-1.5'
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <h4 className='section-heading mb-0'>{heading}</h4>
                <p className='text-gray-500 leading-5 text-sm mb-0'>
                    {description}
                </p>
            </div>

            {/* Description */}
            <div
                className='w-full overflow-hidden'
                data-aos="fade-up"
                data-aos-delay="200"
            >


                {/* Cards */}
                <div className="mt-5 lg:mt-6 w-full grid grid-cols-2 gap-4">
                    {aboutHighlights.map((item, index) => {
                        const selectedColor =
                            colorClasses[item.color] ?? colorClasses.blue;

                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className={`p-4 rounded-md flex flex-col items-start justify-start gap-2 ${selectedColor.bg}`}
                            >
                                {/* Icon */}
                                <div className="inline-block bg-gray-100 p-2 rounded-xl">
                                    <Icon className={`${selectedColor.text}`} size={18} />
                                </div>

                                {/* Text */}
                                <h6 className="font-semibold text-gray-700 text-sm lg:text-base">
                                    {item.title}
                                </h6>
                                <p className="text-xs lg:text-sm text-gray-500 leading-snug">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
