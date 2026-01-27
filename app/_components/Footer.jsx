import React from 'react'
import ContactInfo from './ContactInfo'
import SocialLinks from './SocialLinks'

export default function Footer() {
    return (
        <>
            <div className='w-full lg:hidden flex flex-col items-start justify-center'
                data-aos="fade-up"
            >
                <div className='w-full py-6 flex flex-col gap-5'>
                    <div className='w-full flex flex-col items-center justify-center gap-4'>
                        <ContactInfo />
                    </div>

                    <div className='w-full flex flex-wrap items-center justify-center gap-4'>
                        <SocialLinks />
                    </div>
                </div>

                <div className='w-full py-6 border-t border-gray-200 text-center'>
                    <span className='text-xs sm:text-sm text-center text-gray-500'>© 2025 Karan Kumbhare. All rights reserved.</span>
                </div>
            </div>
        </>
    )
}
