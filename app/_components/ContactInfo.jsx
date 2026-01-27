import React from 'react'
import { contactInfo } from '../assets/data';
import Link from 'next/link';

export default function ContactInfo() {

    return (
        <>
            {contactInfo && contactInfo.length > 0 &&
                contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return item.link && (
                        <Link key={index || item} href={item.link} target='_blank' className='w-full flex items-start justify-start gap-2.5 group relative'>
                            <div className='flex flex-shrink-0 p-2 rounded-full bg-slate-300 group-hover:bg-slate-400 text-gray-500 group-hover:text-gray-600 group-hover:shadow-sm transition-colors duration-300'>
                                <Icon fontSize={16} />
                            </div>
                            <div className='flex flex-col gap-0.5 items-start justify-center transition-colors duration-300'>
                                <span className='text-xs text-gray-500 group-hover:text-gray-600'>{item.label}</span>
                                <span className='text-xs text-gray-600 group-hover:text-gray-700'>{item.linkLabel}</span>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}
