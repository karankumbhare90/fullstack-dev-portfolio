import React from 'react'
import TopProfile from './TopProfile'
import ContactInfo from './ContactInfo'
import SocialLinks from './SocialLinks'

export default function AppSidebar() {
    return (
        <div className='w-full'>
            <TopProfile />
            <div className='lg:flex hidden lg:pb-5'>
                <ContactInfo />
            </div>
            <div className='py-5 lg:border-t grid grid-cols-1 gap-4'>
                <SocialLinks />
            </div>
        </div>
    )
}
