import React from 'react'
import { SocialLinksData } from '../assets/social';

export default function SocialLinks() {

    return (
        <>
            {SocialLinksData?.map((item) => (
                <a href={`${item.url}`} key={item.id} className='flex items-start gap-3 lg:items-start justify-start relative group'>
                    <div className='p-2 rounded-full bg-slate-200 group-hover:bg-slate-300 text-gray-600 group-hover:shadow-sm transition-colors duration-300'>
                        <item.icon fontSize={18} />
                    </div>
                </a>
            ))}
        </>
    )
}
