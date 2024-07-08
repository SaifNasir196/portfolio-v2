import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import { Toaster } from "react-hot-toast";


// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// context
import ThemeProvider from "@/context/ThemeProvider";
import ActiveSectionContectProvider from "@/context/ActiveSectionContextProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saif Nasir",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-teal-50 text-foreground relative dark:bg-slate-950 dark:text-foreground`}>
        <ThemeProvider>
          <div className="bg-teal-400 absolute top-[18rem] right-[8rem] h-[31.25rem] w-[31.25rem]
          rounded-full blur-[15rem] sm:w-[68.75rem] -z-10 dark:bg-teal-900"></div>

          <div className="bg-blue-800 absolute top-[5rem] left-[11rem] h-[31.25rem] w-[50rem]
          rounded-full blur-[25rem] sm:w-[68.75rem] md:left-[33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10 dark:bg-blue-950"></div>
          
          <ActiveSectionContectProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContectProvider>
          
          <Toaster position="top-right" />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}