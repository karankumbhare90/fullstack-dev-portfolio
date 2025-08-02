import Image from 'next/image'
import React from 'react'

export default function TopProfile() {
    return (
        <div className='w-full'>
            <div className='flex flex-col gap-2 items-center lg:items-start justify-center border-b border-[var(--gray-color-2)] pb-5'>
                <div className='flex flex-col items-center lg:items-start justify-center gap-2.5'>
                    <div className="w-full flex items-center lg:justify-start justify-center">
                        <div className='lg:size-24 size-40 overflow-hidden relative'>
                            <Image src={'/Profile-sm.jpg'} alt='Profile' fill className='w-full h-full object-cover rounded-full' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center lg:items-start justify-center gap-1.5'>
                        <h5 className='mb-0 !font-bold'>Karan Kumbhare</h5>
                        <h6 className='mb-0 !text-base font-medium primary-gradient'>Full-Stack Developer</h6>
                    </div>
                </div >
                <div className='flex items-center justify-center lg:justify-start'>
                    <p className='inline-flex text-sm font-medium relative px-5'>
                        <span className='quote-left-icon absolute left-0 -top-1/12 h-3 w-3'>
                            <svg className='w-full h-full' viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.82194 2.84222C5.47553 2.84222 5.91671 3.29718 5.91671 3.9712C5.91671 4.57782 5.41017 5.08334 4.7239 5.08334C3.97226 5.08334 3.41671 4.47672 3.41671 3.54994C3.41671 1.44363 4.95265 0.601104 5.91671 0.5L5.91671 1.42678C5.26311 1.54473 4.52782 2.2019 4.49514 2.92647C4.52782 2.90962 4.65854 2.84222 4.82194 2.84222Z" fill="#79819A" />
                                <path d="M1.4886 2.84222C2.1422 2.84222 2.58337 3.29718 2.58337 3.9712C2.58337 4.57782 2.07684 5.08334 1.39056 5.08334C0.638929 5.08334 0.0833739 4.47672 0.083374 3.54994C0.0833738 1.44363 1.61932 0.601104 2.58337 0.5V1.42678C1.92978 1.54473 1.19448 2.2019 1.16181 2.92647C1.19448 2.90962 1.3252 2.84222 1.4886 2.84222Z" fill="#79819A" />
                            </svg>
                        </span>
                        <span className='inline px-2'>
                            Code is today&apos;s ink for writing tomorrow !!
                        </span>
                        <span className='quote-right-icon absolute right-0 -bottom-1/12 h-3 w-3'>
                            <svg className='w-full h-full' viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.09477 2.6578C0.441176 2.6578 0 2.20284 0 1.52882C0 0.922202 0.506536 0.416687 1.19281 0.416687C1.94444 0.416687 2.5 1.0233 2.5 1.95008C2.5 4.05639 0.964052 4.89892 0 5.00002V4.07324C0.653595 3.95529 1.38889 3.29812 1.42157 2.57355C1.38889 2.5904 1.25817 2.6578 1.09477 2.6578Z" fill="#79819A" />
                                <path d="M4.4281 2.6578C3.77451 2.6578 3.33333 2.20284 3.33333 1.52882C3.33333 0.922202 3.83987 0.416687 4.52614 0.416687C5.27778 0.416687 5.83333 1.0233 5.83333 1.95008C5.83333 4.05639 4.29738 4.89892 3.33333 5.00002V4.07324C3.98693 3.95529 4.72222 3.29812 4.7549 2.57355C4.72222 2.5904 4.5915 2.6578 4.4281 2.6578Z" fill="#79819A" />
                            </svg>
                        </span>
                    </p>
                </div>
            </div>
        </div >
    )
}
