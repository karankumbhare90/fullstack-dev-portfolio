import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import SideBarDot from "./Shared/SideBarDot";
import { educationData } from "../assets/data";
import { colorClasses } from "@/utils/colorClass";

export default function Education() {
    const BASE_DELAY = 1000; // starts after Experience

    return (
        <section className="section-component education">
            <SideBarDot />

            {/* Heading */}
            <div
                className="flex flex-col items-start justify-start gap-1.5"
                data-aos="fade-up"
                data-aos-delay={BASE_DELAY}
            >
                <h4 className="section-heading">Education</h4>
                <p className="section-subheading">My Academic Background</p>
            </div>

            <div className="w-full mt-5 lg:mt-6">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    {educationData.map((item, index) => {
                        const selectedColor =
                            colorClasses[item.color] ?? colorClasses.blue;

                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={BASE_DELAY + 150 + index * 150}
                                className="relative group"
                            >
                                <div
                                    className={`w-full flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md
                  ${selectedColor.bg}`}
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div
                                            className={`size-9 rounded-lg flex items-center justify-center
                      bg-white/60 ${selectedColor.text}`}
                                        >
                                            <LuGraduationCap fontSize={18} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col gap-1 flex-1">
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1">
                                            <h6 className="text-xs text-gray-500">
                                                {item.institute}
                                            </h6>
                                            <span className="text-xs text-gray-500">
                                                {item.startDate} – {item.endDate}
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-start gap-1">
                                            <p className="text-sm lg:text-base text-gray-700 font-medium">
                                                {item.degree}
                                            </p>
                                            <span className="text-xs text-gray-500">
                                                {item.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
