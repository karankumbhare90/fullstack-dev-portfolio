import Image from 'next/image'
import React from 'react'
import { ExperienceData } from '../assets/experience'
import SideBarDot from './Shared/SideBarDot'
import { colorClasses } from '@/utils/colorClass'

export default function Experience() {

    const { heading, description, experiences } = ExperienceData;

    return (
        <section className='section-component experience'>
            <SideBarDot />

            {/* Heading */}
            <div
                className='flex flex-col items-start justify-start gap-1.5'
                data-aos="fade-up"
            >
                {heading && <h4 className='section-heading mb-0'>{heading}</h4>}
                {description && <p className='text-gray-500 leading-5 text-sm mb-0'>{description}</p>}
            </div>

            {experiences && experiences.length > 0 &&
                <div className='mt-5 lg:mt-6 overflow-hidden'>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {experiences?.map((item, index) => {
                            const selectedColor = colorClasses[item.color] ?? colorClasses.blue;

                            return (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="relative group"
                                >
                                    <div
                                        className={`w-full h-full flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md 
                  ${selectedColor.bg}`}
                                    >
                                        {/* Logo */}
                                        <div className="flex-shrink-0">
                                            <div
                                                className={`lg:size-10 size-9 overflow-hidden relative rounded-lg flex items-center justify-center
                      ${selectedColor.text} bg-white/50`}
                                            >
                                                {item?.companyImage ? (
                                                    <Image
                                                        src={item.companyImage}
                                                        alt={item.companyName}
                                                        fill
                                                        className="object-cover rounded-lg"
                                                    />
                                                ) : (
                                                    <span className="text-sm font-semibold">
                                                        {item.companyName?.charAt(0)?.toUpperCase()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-1 flex-col gap-2">
                                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1">
                                                <h6 className="text-xs text-gray-500">
                                                    {item.companyName}
                                                </h6>
                                                <span className="text-xs text-gray-500">
                                                    {item.experience?.startData} – {item.experience?.endData}
                                                </span>
                                            </div>

                                            <div className="flex flex-col items-start gap-1">
                                                <p className="text-sm lg:text-base text-gray-700 font-medium">
                                                    {item.experience?.position}
                                                </p>
                                                <span className="text-xs text-gray-500">
                                                    {item.location}
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            }
        </section>
    );
}