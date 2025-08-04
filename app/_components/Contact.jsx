import React from 'react'
import { FaLink, FaLocationDot } from 'react-icons/fa6'
import { RiGithubLine } from 'react-icons/ri'

export default function Contact() {

    return (
        <div className='lg:pl-10 lg:border-l border-[var(--gray-color-2)] relative contact pb-10'>
            <div className='absolute h-7 w-7 rounded-full -left-4 top-0 hidden lg:flex items-center justify-center shadow-1 bg-[var(--gray-color-1)]'>
                <span className='h-3 w-3 rounded-full bg-[var(--secondary-color-6)]'></span>
            </div>
            <h4 className='relative'>Contact</h4>
            <div className="mt-6 pl-1 flex flex-col">
                {[1, 2, 3].map((item, index) => (
                    <div key={index} className={`${index !== 2 ? 'border-l' : ''} pl-5 ml-1 pb-5 relative`}>
                        {/* Child Dots */}
                        <div className='absolute h-2.5 w-2.5 rounded-full -left-[5px] top-0 flex items-center justify-center bg-[var(--gray-color-1)]' >
                            <span className='h-full w-full rounded-full bg-[var(--secondary-color-6)]'></span>
                        </div>
                        <div className='w-full'>
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
                                    <span className='mb-0 !text-sm text-[var(--gray-color-5)]'>Jr. Frontend Developer</span>
                                    <p className='mb-0 !text-sm text-[var(--gray-color-7)]'>Digiwhiz</p>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
