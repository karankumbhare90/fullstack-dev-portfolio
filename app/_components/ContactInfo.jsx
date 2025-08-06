import React from 'react'
import { BsEnvelope } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6"

export default function ContactInfo() {

    const contactInfo = {
        email: 'karankumbhare90@gmail.com',
        phone: '+91 6352305914',
        address: 'Surat, Gujarat, India'
    }

    return (
        <>
            <div className='flex items-start justify-start gap-2.5'>
                <a href={`mailto:${contactInfo?.email}`} className='contact-icon-div group'>
                    <BsEnvelope fontSize={12} className='contact-icon' />
                </a>

                <div className='flex flex-col gap-1 items-start justify-center'>
                    <span className='contact-info-lable'>Email</span>
                    <a href={`mailto:${contactInfo?.email}`} className='contact-info'>{contactInfo.email}</a>
                </div>
            </div>
            <div className='flex items-start justify-start gap-2.5'>
                <a href={`tel:${contactInfo?.phone}`} className='contact-icon-div group'>
                    <MdCall fontSize={12} className='contact-icon' />
                </a>

                <div className='flex flex-col gap-1 items-start justify-center'>
                    <span className='contact-info-lable'>Phone</span>
                    <a href={`tel:${contactInfo?.phone}`} className='contact-info'>{contactInfo?.phone}</a>
                </div>
            </div>
            <div className='flex items-start justify-start gap-2.5'>
                <div className='contact-icon-div group'>
                    <FaLocationDot fontSize={12} className='contact-icon' />
                </div>
                <div className='flex flex-col gap-1 items-start justify-center'>
                    <span className='contact-info-lable'>Adress</span>
                    <div className='contact-info'>{contactInfo?.address}</div>
                </div>
            </div>
        </>
    )
}
