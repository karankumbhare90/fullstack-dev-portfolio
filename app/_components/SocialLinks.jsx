import React from 'react'
import { socialLinks } from '../assets/data';

export default function SocialLinks() {

    return (
        <>
            {socialLinks?.map((item) => (
                <a href={`${item.url}`} key={item.id} className='flex items-start gap-3 lg:items-start justify-start'>
                    <div className='contact-icon-div group'>
                        <item.icon fontSize={14} className='contact-icon' />
                    </div>
                    <div className='flex flex-col gap-1 items-start justify-center'>
                        <span className='contact-info-lable'>{item.name}</span>
                        <div className='contact-info'>{item.handle}</div>
                    </div>
                </a>
            ))}
        </>
    )
}
