'use client'
import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { MdChevronLeft, MdChevronRight, MdStar } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialData } from '../assets/testimonial';
import SideBarDot from './Shared/SideBarDot';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa6';

export default function Testimonial() {

    const { heading, description, testimonialData } = TestimonialData;

    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = testimonialData.length;

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        centerMode: false,
        arrows: false,
        slidesToShow: 2,
        beforeChange: (_, next) => setCurrentSlide(next),
        responsive: [
            { breakpoint: 1440, settings: { slidesToShow: 2, } },
            { breakpoint: 1280, settings: { slidesToShow: 2, } },
            { breakpoint: 991, settings: { slidesToShow: 2, } },
            { breakpoint: 640, settings: { slidesToShow: 1.1, } },
        ],
    };

    const isPrevDisabled = currentSlide === 0;
    const isNextDisabled =
        currentSlide >= totalSlides - sliderSettings.slidesToShow;


    const testimonialCards = testimonialData?.map((item, index) => (
        <div
            key={item.id}
            className="w-full h-full flex items-start justify-start"
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <div className="w-full h-full relative group bg-slate-200 hover:bg-slate-300 transition-all duration-300 rounded-md p-4 overflow-hidden">
                <div className='absolute right-4 top-4 text-gray-400'>
                    <FaQuoteRight fontSize={32} />
                </div>
                <div className="h-full w-full flex flex-col items-start justify-start gap-4">

                    {/* Header */}
                    <div className="w-full flex items-center gap-3">
                        <div className="size-10 rounded-full overflow-hidden relative">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col">
                            <h6 className="text-sm lg:text-base font-medium text-gray-700">
                                {item.name}
                            </h6>

                            {/* Rating */}
                            <div className="flex items-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <MdStar
                                        key={i}
                                        data-aos="zoom-in"
                                        data-aos-delay={i * 100}
                                        className={`text-sm ${i < item.rating ? "text-yellow-500" : "text-gray-400"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="w-full flex flex-col flex-1 justify-between">
                        <p className="text-xs lg:text-sm text-gray-600 line-clamp-4">
                            “{item.quote}”
                        </p>
                    </div>

                </div>
            </div>
        </div>
    ));

    return (
        <section className='section-component testimonial'>
            <SideBarDot />
            <div className='flex flex-col items-start justify-start gap-1.5' data-aos="fade-up">
                {heading && <h4 className="section-heading">{heading}</h4>}
                {description && <p className="text-gray-500 leading-5 text-sm mb-0">{description}</p>}
            </div>
            {testimonialData && testimonialData.length > 0 &&
                <>
                    <div className="testimonial-slider w-full mt-5 lg:mt-6 relative mb-5 lg:mb-6">
                        <Slider ref={sliderRef} {...sliderSettings}>
                            {testimonialCards}
                        </Slider>
                    </div>
                    <div className="flex items-center justify-end gap-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <button
                            onClick={() => sliderRef.current.slickPrev()}
                            disabled={isPrevDisabled}
                            className={`rounded-full p-2 transition-all
      ${isPrevDisabled
                                    ? "bg-slate-200 text-gray-400 pointer-events-none"
                                    : "bg-slate-300 hover:bg-slate-400 text-gray-700"
                                }`}
                        >
                            <MdChevronLeft fontSize={16} />
                        </button>

                        <button
                            onClick={() => sliderRef.current.slickNext()}
                            disabled={isNextDisabled}
                            className={`rounded-full p-2 transition-all
      ${isNextDisabled
                                    ? "bg-slate-200 text-gray-400 pointer-events-none"
                                    : "bg-slate-300 hover:bg-slate-400 text-gray-700"
                                }`}
                        >
                            <MdChevronRight fontSize={16} />
                        </button>
                    </div>
                </>
            }
        </section >
    )
}
