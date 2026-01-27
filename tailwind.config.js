/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '20px'
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif']
      },
      colors: {
        "accent": "#5044E5"
      }
    },
  },
  plugins: [],
  safelist: [
    // Background colors
    "bg-slate-100", "bg-gray-100", "bg-zinc-100", "bg-neutral-100", "bg-stone-100",
    "bg-red-100", "bg-orange-100", "bg-amber-100", "bg-yellow-100", "bg-lime-100",
    "bg-green-100", "bg-emerald-100", "bg-teal-100", "bg-cyan-100", "bg-sky-100",
    "bg-blue-100", "bg-indigo-100", "bg-violet-100", "bg-purple-100", "bg-fuchsia-100",
    "bg-pink-100", "bg-rose-100",

    // Text colors
    "text-slate-500", "text-gray-500", "text-zinc-500", "text-neutral-500", "text-stone-500",
    "text-red-500", "text-orange-500", "text-amber-500", "text-yellow-500", "text-lime-500",
    "text-green-500", "text-emerald-500", "text-teal-500", "text-cyan-500", "text-sky-500",
    "text-blue-500", "text-indigo-500", "text-violet-500", "text-purple-500", "text-fuchsia-500",
    "text-pink-500", "text-rose-500",
  ]
}