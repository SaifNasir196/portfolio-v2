import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import { Toaster } from "react-hot-toast";

// context
import ThemeProvider from "@/context/ThemeProvider";
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>

      <body className={`${inter.className} bg-teal-50 text-foreground relative dark:bg-slate-950 dark:text-foreground`}>
        <ThemeProvider>

          <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[5vh] left-[5%] sm:left-[10%] w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] rounded-full blur-[16vw] sm:blur-[75vw] bg-teal-400 opacity-100 sm:opacity-100 dark:bg-teal-900"></div>

            <div className="absolute top-[35vh] right-[5%] sm:right-[15%] w-[35vw] h-[35vw] sm:w-[25vw] sm:h-[25vw] rounded-full blur-[10vw] sm:blur-[16vw] bg-blue-800 opacity-100 sm:opacity-60 dark:bg-blue-950"></div>

            <div className="absolute top-[65vh] left-[10%] sm:left-[20%] w-[30vw] h-[30vw] sm:w-[22vw] sm:h-[22vw] rounded-full blur-[10vw] sm:blur-[14vw] bg-purple-400 opacity-100 sm:opacity-50 dark:bg-purple-900"></div>

            <div className="absolute top-[100vh] right-[15%] sm:right-[25%] w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] rounded-full blur-[10vw] sm:blur-[12vw] bg-orange-400 opacity-100 sm:opacity-100 dark:bg-orange-900"></div>
          </div>

          {/* <div className="flex flex-col items-center justify-center min-h-screen w-full"> */}
            {children}
          {/* </div> */}

          <Toaster position="top-right" />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}