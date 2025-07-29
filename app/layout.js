import { Poppins } from "next/font/google";
import "./globals.css";
import "./variables.css";

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
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
