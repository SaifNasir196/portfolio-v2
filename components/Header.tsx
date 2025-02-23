"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Importing icons

export default function Header() {
  const { activeSection, setActiveSection, setLastClickTime } = useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu

  return (
    <header className="z-[999] relative">
      {/* Normal Header for Desktop */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white
        bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem]
        sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* Navigation - Desktop */}
      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className={cn(
                  "px-5 py-3 flex w-full items-center justify-center transition",
                  "hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setLastClickTime(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu - Hamburger Icon */}
      <div className="sm:hidden fixed top-4 left-4 z-[1000]">
        <button
          className="p-2 rounded-md bg-white/80 dark:bg-gray-800/80 shadow-md backdrop-blur-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <HiOutlineMenu size={28} className="text-gray-900 dark:text-white" />
        </button>
      </div>

      {/* Mobile Menu - Fullscreen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <HiX />
            </button>

            {/* Mobile Navigation Links */}
            <motion.ul
              className="flex flex-col items-center gap-6 text-white text-xl font-semibold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {links.map((link) => (
                <motion.li
                  key={link.hash}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setLastClickTime(Date.now());
                      setIsOpen(false); // Close menu on selection
                    }}
                    className="transition hover:text-gray-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
