import React from 'react'

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// context
import ActiveSectionContectProvider from "@/context/ActiveSectionContextProvider";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <ActiveSectionContectProvider>
            <Header />
            {children}
            <Footer />
        </ActiveSectionContectProvider>
    )
}

export default layout