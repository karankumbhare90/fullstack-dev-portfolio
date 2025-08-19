import React from 'react'
import { socialLinks } from '../assets/data';

export default function SocialLinks() {

    return (
        <>
            {socialLinks?.map((item) => (
                <a href={`${item.url}`} key={item.id} className='flex flex-col md:flex-row items-center lg:items-start justify-start gap-2.5'>
                    <div className='contact-icon-div group'>
                        <item.icon fontSize={14} className='contact-icon' />
                    </div>
                    <div className='flex flex-col gap-1 items-center md:items-start justify-center'>
                        <span className='contact-info-lable'>{item.name}</span>
                        <div className='contact-info'>{item.handle}</div>
                    </div>
                </a>
            ))}
        </>
    )
}
