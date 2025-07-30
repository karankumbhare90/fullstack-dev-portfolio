import React from 'react'
import { BsEnvelope } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6"

export default function ContactInfo() {

    const contactInfo = [
        {
            id: 1,
            label: 'Email',
            option: 'karankumbhare90@gmail.com',
            icon: BsEnvelope
        },
        {
            id: 2,
            label: 'Phone',
            option: '+91 6352305914',
            icon: MdCall
        },
        {
            id: 3,
            label: 'Address',
            option: 'Surat, Gujarat, India',
            icon: FaLocationDot
        },
    ]

    return (
        <div className='w-full pt-5'>
            <div className='grid grid-cols-1 gap-4'>
                {contactInfo?.map((item) => (
                    <div key={item.id} className='flex items-start justify-start gap-2.5'>
                        <div className='p-2 rounded-full bg-[var(--gray-color-2)]'>
                            <item.icon className='text-[var(--gray-color-5)]' fontSize={16} />
                        </div>
                        <div className='flex flex-col gap-1 items-start justify-center'>
                            <span className='text-xs text-[var(--gray-color-5)]'>{item.label}</span>
                            <h5 className='!text-sm !text-[var(--gray-color-6)] !font-normal'>{item.option}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
