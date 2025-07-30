import { Poppins } from "next/font/google";
import "./globals.css";
import "./App.css";
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
        <div className="blob blob-blue"></div>
        <div className="blob blob-purple"></div>
        <div className="blob blob-green"></div>
        <div className="blob blob-cyan"></div>
        <div className="blob blob-purple2"></div>
        <div className="blob blob-pink"></div>
        <div className="blob blob-purple3"></div>
        <div className="relative z-[10000]">
          <div className="flex items-center justify-center relative">
            <div className="lg:block hidden absolute w-[55vw] h-full top-0 -left-[30%] bg-white" />
            <div className="w-full container relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 h-screen relative z-[10000]">
                {/* Sidebar */}
                <div className="lg:col-span-3 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto sm:px-5 bg-white inner-wrap relative no-scrollbar">
                  <AppSidebar />
                </div>

                {/* Main Content */}
                <div className="lg:col-span-9 h-full lg:overflow-y-auto sm:px-5 lg:pl-10 inner-wrap no-scrollbar">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
