"use client";

import { useEffect, useState } from "react";
import { HiOutlineSun } from "react-icons/hi";
import { BsMoonStarsFill } from "react-icons/bs";

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        document.body.setAttribute("data-theme", savedTheme);
    }, []);

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <>
            {children}
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full fixed bottom-5 right-12 z-50 
                   bg-[var(--gray-color-1)] transition-colors duration-500"
            >
                {theme === "dark" ? (
                    <HiOutlineSun
                        className="text-yellow-400 transition-transform duration-500 transform rotate-0"
                        fontSize={22}
                    />
                ) : (
                    <BsMoonStarsFill
                        className="text-blue-500 transition-transform duration-500 transform rotate-0"
                        fontSize={20}
                    />
                )}
            </button>
        </>
    );
}
