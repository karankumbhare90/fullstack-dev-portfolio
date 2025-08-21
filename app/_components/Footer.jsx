import React from 'react'
import ContactInfo from './ContactInfo'
import SocialLinks from './SocialLinks'

export default function Footer() {
    return (
        <>
            <div className='w-full lg:hidden flex flex-col items-start justify-center'>
                <div className='w-full grid grid-cols-2 md:gap-0 items-start justify-between py-6 -mx-3'>
                    <div className="w-full grid grid-cols-1 gap-4 px-3">
                        <ContactInfo />
                    </div>
                    <div className='w-full grid-cols-1 md:grid-cols-2 gap-4 grid px-3'>
                        <SocialLinks />
                    </div>
                </div>

                <div className='w-full py-6 border-t border-[var(--gray-color-1)] text-center'>
                    <span className='text-xs sm:text-sm text-center text-[var(--gray-color-6)]'>© 2025 Karan Kumbhare. All rights reserved.</span>
                </div>
            </div>
        </>
    )
}
