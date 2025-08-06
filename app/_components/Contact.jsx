"use client";
import React, { useState } from 'react'

export default function Contact() {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        // Simulate async request (e.g. API call)
        setTimeout(() => {
            setLoading(false)
            alert("Message sent!") // Replace with actual logic
        }, 2000)
    }

    return (
        <div className='lg:pl-10 lg:border-l border-[var(--gray-color-2)] relative contact pb-10'>
            <div className='absolute h-7 w-7 rounded-full -left-4 top-0 hidden lg:flex items-center justify-center shadow-1 bg-[var(--gray-color-1)]'>
                <span className='h-3 w-3 rounded-full bg-[var(--secondary-color-6)]'></span>
            </div>
            <h4 className='relative'>Contact</h4>
            <div className="mt-6 flex flex-col">
                <form
                    onSubmit={handleSubmit}
                    className='bg-[var(--gray-color-1)] group relative p-5 rounded-md grid grid-cols-1 gap-5'
                >
                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className='relative contact-form-input'>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div className="relative contact-form-input w-full">
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="relative contact-form-input w-full">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="relative contact-form-input w-full">
                        <textarea
                            id="message"
                            placeholder="Message"
                            className="!max-h-32 resize-none"
                            rows={5}
                            required
                        />
                    </div>

                    <div>
                        <button
                            type='submit'
                            disabled={loading}
                            className={`text-base font-medium rounded-md transition-all button button-primary`}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
