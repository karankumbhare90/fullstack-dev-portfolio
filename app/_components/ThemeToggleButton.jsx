"use client";

import { HiOutlineSun } from "react-icons/hi";
import { BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full fixed bottom-5 right-12 
                 bg-[var(--gray-color-1)] transition-colors duration-500"
        >
            {theme === "dark" ? (
                <HiOutlineSun className="text-yellow-400" fontSize={22} />
            ) : (
                <BsMoonStarsFill className="text-blue-500" fontSize={20} />
            )}
        </button>
    );
}
