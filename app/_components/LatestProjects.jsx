import Image from 'next/image'
import React from 'react'
import { FaLink } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";

export default function LatestProjects() {
    return (
        <div className='lg:pl-10 lg:border-l relative'>
            <div className='absolute h-7 w-7 rounded-full -left-4 top-0 hidden lg:flex items-center justify-center shadow-1 bg-[var(--gray-color-1)]' >
                <span className='h-3 w-3 rounded-full bg-[var(--secondary-color-6)]'></span>
            </div>
            <h4 className='relative'>Latest Projects</h4>
            <div className='mt-4 flex flex-wrap items-center justify-between sm:-mx-3 -mb-6'>
                {/* Apply Array Here */}
                {[1, 2, 3].map((item, index) => (
                    <div key={index} className={`relative w-full lg:w-1/2 mb-6`}>
                        {/* Child Dots */}
                        <div className='flex items-start justify-start sm:px-3'>
                            <div className='w-full h-full bg-[var(--gray-color-1)] rounded-md min-h-20 p-4'>
                                <div className="w-full flex flex-col items-start justify-start">
                                    <div className='size-32 w-2/4 overflow-hidden relative'>
                                        <Image src={'/Profile-sm.jpg'} alt='Project Image' fill className='w-full h-full object-cover rounded-md' />
                                    </div>
                                    <div className='mt-2.5'>
                                        <h5>Powerful Design System</h5>
                                        <p className='line-clamp-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, incidunt! Quidem, veritatis pariatur dolor porro magni fugiat id veniam incidunt ipsum eum iure minus unde culpa doloremque ipsam inventore aut.</p>

                                        <div className='mt-3'>
                                            <div className='button-group flex items-center justify-start gap-2.5'>
                                                <a href='#' className='cursor-pointer flex items-center justify-start gap-2'>
                                                    <div className='p-1.5 bg-[var(--secondary-color-2)] rounded-full flex items-center justify-center gap-1.5'>
                                                        <FaLink className='text-[var(--secondary-color-4)]' fontSize={12} />
                                                    </div>
                                                    <span className='!text-sm text-[var(--secondary-color-4)]'>View Demo</span>
                                                </a>
                                                <a href='#' className='cursor-pointer flex items-center justify-start gap-2'>
                                                    <div className='p-1.5 bg-[var(--secondary-color-2)] rounded-full flex items-center justify-center gap-1.5'>
                                                        <RiGithubLine className='text-[var(--secondary-color-5)]' fontSize={12} />
                                                    </div>
                                                    <span className='!text-sm text-[var(--secondary-color-5)]'>GitHub</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
