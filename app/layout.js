
import { Poppins } from "next/font/google";
import "./globals.css";
import AppSidebar from "./_components/AppSidebar";
import AOSProvider from "./_components/AOSProvider";
import ThemeProvider from "./_components/ThemeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Karan Kumbhare | Fullstack Dev",
  description: "Portfolio By Karan Kumbhare",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${poppins.variable} antialiased lg:overflow-y-hidden overflow-x-hidden`}
      >
        <AOSProvider />
        <ThemeProvider>
          <div className="w-full container sm:px-0 relative">
            <div className="w-full flex flex-wrap items-start justify-between h-screen relative z-[10000] lg:-mx-5">
              {/* Sidebar */}
              <div className="w-full lg:w-3/12 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto inner-wrap relative no-scrollbar">
                <div className="w-full h-full lg:px-5" data-aos="fade-left">
                  <AppSidebar />
                </div>
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-9/12 h-full lg:overflow-y-auto pb-6 lg:py-12 no-scrollbar">
                <div className="w-full h-full lg:px-5">{children}</div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
