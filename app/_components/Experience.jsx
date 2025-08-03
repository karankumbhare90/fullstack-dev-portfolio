import Image from 'next/image'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

export default function Experience() {
    return (
        <div className='lg:pl-10 lg:border-l relative'>
            <div className='hidden absolute h-7 w-7 rounded-full -left-4 top-0 lg:flex items-center justify-center shadow-1 bg-[var(--gray-color-1)]' >
                <span className='h-3 w-3 rounded-full bg-[var(--secondary-color-6)]'></span>
            </div>
            <h4 className='relative'>Experience</h4>

            <div className='mt-4'>
                {/* Apply Array Here */}
                {[1, 2, 3].map((item, index) => (
                    <div key={index} className={`${index !== 2 ? 'lg:border-l border-l-0' : ''} pl-5 pb-2 relative`}>
                        {/* Child Dots */}
                        <div className='hidden absolute h-2 w-2 rounded-full -left-[4px] top-0 lg:flex items-center justify-center bg-[var(--gray-color-1)]' >
                            <span className='h-full w-full rounded-full bg-[var(--secondary-color-6)]'></span>
                        </div>

                        <div className='w-full flex items-start justify-start pb-2'>
                            <div className='w-3/6'>
                                <div className='flex flex-col gap-2 items-start justify-start'>
                                    <div className='flex items-center justify-start gap-2.5'>
                                        {/* Date And Localtion */}
                                        <div className='flex items-center justify-center ex-span'>
                                            <span className='mr-1'>Start Date</span> - <span className='ml-1'>End Date</span>
                                        </div>
                                        <div className='flex items-center justify-center gap-2 ex-span'>
                                            <FaLocationDot fontSize={12} className='contact-icon' />
                                            <span>Ahmedabad, Gujarat</span>
                                        </div>
                                    </div>

                                    {/* Company Details */}
                                    <div className='flex items-start justify-start gap-2.5'>

                                        <div className='lg:size-10 size-5 overflow-hidden relative'>
                                            <Image src={'/Profile-sm.jpg'} alt='Profile' fill className='w-full h-full object-cover rounded-lg' />
                                        </div>

                                        <div className=''>
                                            <span className='mb-0 !text-sm text-[var(--gray-color-5)]'>Jr. Frontend Developer</span>
                                            <p className='mb-0 !text-sm text-[var(--gray-color-7)]'>Digiwhiz</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='w-3/6'>
                                <div className='w-full'>
                                    <p className='mb-0 !text-sm text-[var(--gray-color-6)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div >
    )
}
