import React from 'react'
import { socialLinks } from '../assets/data';

export default function SocialLinks() {

    return (
        <>
            {socialLinks?.map((item) => (
                <a href={`${item.url}`} key={item.id} className='flex items-start gap-3 lg:items-start justify-start relative group'>
                    <div className='p-2 rounded-full bg-slate-300 group-hover:bg-slate-400 text-gray-500 group-hover:text-gray-600 group-hover:shadow-sm transition-colors duration-300'>
                        <item.icon fontSize={18} />
                    </div>
                </a>
            ))}
        </>
    )
}
