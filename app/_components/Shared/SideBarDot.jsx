import React from 'react'

export default function SideBarDot() {
    return (
        <div className='hidden absolute h-7 w-7 rounded-full -left-4 top-0 lg:flex items-center justify-center shadow-1 bg-gray-50' >
            <span className='h-3 w-3 rounded-full bg-[var(--accent)]'></span>
        </div>
    )
}
