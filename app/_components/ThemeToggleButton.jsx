"use client";

import { HiOutlineSun } from "react-icons/hi";
import { BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full absolute bottom-5 right-12 
                 bg-gray-200 transition-colors duration-500"
        >
            {theme === "dark" ? (
                <HiOutlineSun fontSize={22} />
            ) : (
                <BsMoonStarsFill fontSize={20} />
            )}
        </button>
    );
}
