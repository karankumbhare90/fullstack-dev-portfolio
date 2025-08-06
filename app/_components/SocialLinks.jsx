import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function SocialLinks() {

    const socialLinks = [
        {
            id: 1,
            name: 'Instagram',
            handle: 'karankumbhare_',
            url: 'http://instagram.com/karankumbhare_',
            icon: IoLogoInstagram
        },
        {
            id: 2,
            name: 'GitHub',
            handle: 'karankumbhare90',
            url: 'http://github.com/karankumbhare90',
            icon: LuGithub
        },
        {
            id: 3,
            name: 'LinkedIn',
            handle: 'karankumbhare90',
            url: 'http://github.com/karankumbhare90',
            icon: FaLinkedinIn
        },
        {
            id: 4,
            name: 'LeetCode',
            handle: 'karankumbhare90',
            url: 'http://leetcode.com/u/karankumbhare90',
            icon: SiLeetcode
        }
    ]

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
