import React from 'react'
import TopProfile from './TopProfile'
import ContactInfo from './ContactInfo'

export default function AppSidebar() {
    return (
        <div className='w-full'>
            <TopProfile />
            <div className='lg:flex hidden'>
                <ContactInfo />
            </div>
        </div>
    )
}
