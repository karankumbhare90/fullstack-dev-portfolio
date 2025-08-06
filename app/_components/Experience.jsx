import Image from 'next/image'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

export default function Experience() {

    const experiences = [
        {
            companyName: 'Digiwhiz',
            location: 'Ahmedabad, Gujarat',
            experience: {
                position: 'Jr. Front-End Developer',
                startData: 'Aug 2025',
                endData: 'Present'
            }
        },
        {
            companyName: 'Digiwhiz',
            location: 'Ahmedabad, Gujarat',
            experience: {
                position: 'Front-End Developer Trainee',
                startData: 'Jan 2025',
                endData: 'Aug 2025'
            }
        }
    ]

    return (
        <div className='experience lg:pl-10 lg:border-l border-[var(--gray-color-2)] relative pb-10'>
            <div className='hidden absolute h-7 w-7 rounded-full -left-4 top-0 lg:flex items-center justify-center shadow-1 bg-[var(--gray-color-1)]' >
                <span className='h-3 w-3 rounded-full bg-[var(--secondary-color-6)]'></span>
            </div>
            <h4 className='relative' data-aos="fade-up">Experience</h4>

            <div className='mt-6 -mb-4 overflow-hidden'>
                {/* Apply Array Here */}
                {experiences?.map((item, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={`${(index + 1) * 150}`} className={`pb-4 relative`}>
                        {/* Child Dots */}
                        {/* <div className='absolute h-2.5 w-2.5 rounded-full -left-[5px] top-0 flex items-center justify-center bg-[var(--gray-color-1)]' >
                            <span className='h-full w-full rounded-full bg-[var(--secondary-color-6)]'></span>
                        </div> */}

                        <div className='w-full flex items-start justify-start gap-4 p-4 rounded-md bg-[var(--gray-color-1)] hover:bg-[var(--primary-color-1)] transition-all duration-300'>
                            <div className='lg:size-16 size-12 overflow-hidden relative'>
                                {item?.companyImage
                                    ? <Image src={'/Profile-sm.jpg'} alt='Profile' fill className='w-full h-full object-cover rounded-lg' />
                                    : <>
                                        <span className='h-full w-full bg-[var(--secondary-color-3)] flex items-center justify-center rounded-full text-xl font-bold border-4 border-[var(--gray-color-2)]'>
                                            {item.companyName?.charAt(0)?.toUpperCase()}
                                        </span>
                                    </>
                                }
                            </div>
                            <div className='flex flex-1 items-start justify-between gap-4'>
                                {/* Company Details */}
                                <div className='flex flex-col items-start justify-center gap-2.5'>
                                    <p className='mb-0 !text-sm text-[var(--gray-color-7)]'>{item.companyName}</p>
                                    <span className='mb-0 !text-sm text-[var(--gray-color-5)]'>{item.experience?.position}</span>

                                </div>
                                <div className='flex flex-col items-start justify-end gap-2.5'>
                                    <div className='flex items-center justify-center gap-2 ex-span'>
                                        <FaLocationDot fontSize={14} className='contact-icon' />
                                        <p className='mb-0 !text-sm text-[var(--gray-color-7)]'>{item.location}</p>
                                    </div>
                                    <span className='!text-sm text-[var(--gray-color-5)]'>{item.experience?.startData}-{item.experience?.endData}</span>
                                </div>
                                {/* <div className='w-full flex flex-col items-end justify-start gap-3'>
                                    
                                    {item.experience?.map((experience, index) => (
                                        <div className='pl-5 w-full flex items-center justify-between text-left relative' key={index}>
                                            <div className='absolute h-1.5 w-1.5 rounded-full left-0 top-1 flex items-center justify-center bg-[var(--gray-color-1)]' >
                                                <span className='h-full w-full rounded-full bg-[var(--secondary-color-6)]'></span>
                                            </div>
                                            <div className='flex items-center justify-center gap-2 ex-span'>
                                                <span className='mb-0 !text-sm text-[var(--gray-color-5)]'>{experience?.position}</span>
                                            </div>
                                            <div className='flex items-center justify-start ex-span !text-sm text-[var(--gray-color-5)]'>
                                                <span className=''>{experience?.startData}-{experience?.endData}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div> */}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
