import { Poppins } from "next/font/google";
import "./globals.css";

import AppSidebar from "./_components/AppSidebar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Karan Kumbhare | Fullstack Dev",
  description: "Portfolio By Karan Kumbhare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic" rel="stylesheet" />
      </head>
      <body
        className={`${poppins.variable} antialiased lg:overflow-y-hidden overflow-x-hidden`}
        data-theme="light"
      >
        <div className="relative z-[10000]">
          <div className="flex items-center justify-center relative">
            <div className="lg:block hidden absolute w-[55vw] h-full top-0 -left-[30%] bg-[var(--gray-color-1)]" />
            <div className="w-full container relative">
              <div className="w-full flex flex-wrap items-start justify-between h-screen relative z-[10000] lg:-mx-5">
                {/* Sidebar */}
                <div className="w-full lg:w-3/12 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto bg-[var(--gray-color-1)] inner-wrap relative no-scrollbar">
                  <div className="w-full h-full lg:px-5">
                    <AppSidebar />
                  </div>
                </div>

                {/* Main Content */}
                <div className="w-full lg:w-9/12 h-full lg:overflow-y-auto pb-6 lg:py-12 no-scrollbar">
                  <div className="w-full h-full lg:px-5">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
