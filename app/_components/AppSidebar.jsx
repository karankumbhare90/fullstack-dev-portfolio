import React from 'react'
import TopProfile from './TopProfile'
import ContactInfo from './ContactInfo'
import SocialLinks from './SocialLinks'

export default function AppSidebar() {
    return (
        <div className='w-full'>
            <TopProfile />
            <div className='lg:grid grid-cols-1 gap-4 hidden lg:py-5'>
                <ContactInfo />
            </div>
            <div className='py-5 lg:border-t border-gray-300 flex-wrap items-start justify-start gap-4 lg:flex hidden'>
                <SocialLinks />
            </div>
        </div>
    )
}
