"use client";
import React, { useState } from "react";
import SideBarDot from "./Shared/SideBarDot";
import toast from "react-hot-toast";

export default function Contact() {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));

        // Clear error when user types
        setErrors((prev) => ({ ...prev, [id]: "" }));
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);

        try {
            await fetch(process.env.NEXT_PUBLIC_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify({
                    ...formData
                }),
            });

            setLoading(false);
            toast.success("Message sent successfully!");

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            });

        } catch (error) {
            setLoading(false);
            toast.error("Network error. Please try again.");
        }
    };


    return (
        <div className="section-component contact">
            <SideBarDot />
            <div className='flex flex-col items-start justify-start gap-1.5' data-aos="fade-up">
                <h4 className='section-heading mb-0'>Contact</h4>
                <p className='section-subheading'>Experience I've in Development</p>
            </div>

            <div className="mt-5 lg:mt-6 flex flex-col">
                <form
                    onSubmit={handleSubmit}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="bg-slate-200 group relative p-5 rounded-md grid grid-cols-1 gap-5"
                >
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="relative contact-form-input">
                            <label htmlFor="firstName">First Name *</label>
                            <input
                                type="text"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`${errors.firstName && "!border-red-500"}`}
                                placeholder="eg. Karan"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                            )}
                        </div>

                        <div className="relative contact-form-input w-full">
                            <label htmlFor="lastName">Last Name *</label>
                            <input
                                type="text"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`${errors.lastName && "!border-red-500"}`}
                                placeholder="eg. Kumbhare"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                            )}
                        </div>
                    </div>

                    <div className="relative contact-form-input w-full">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`${errors.email && "!border-red-500"}`}
                            placeholder="eg. info@gmail.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div className="relative contact-form-input w-full">
                        <label htmlFor="message">Message *</label>
                        <textarea
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="eg. Your Message"
                            className={`!max-h-32 resize-none ${errors.message && "!border-red-500"}`}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`text-sm font-medium rounded-lg transition-all button button-primary bg-[var(--accent)] flex items-center gap-2
    ${loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"}`}
                        >
                            {loading ? "Sending..." : "Send Message"}
                            {loading && (
                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
