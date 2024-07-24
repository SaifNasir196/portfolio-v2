"use client"

import React from 'react'
import { useTheme } from 'next-themes'
// import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from './ui/button'

const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();

    return (
        <Button
            onClick={() => setTheme( theme === 'dark' ? 'light' : 'dark')} 
            className='fixed bottom-5 right-5 bg-white text-black/[0.8]  w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-300 border-opacity-40
            shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-primary dark:text-white dark:border-white dark:border-opacity-40 dark:bg-opacity-80 dark:backdrop-blur-[0.5rem]'
        >
            <SunIcon size={40} className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          
        </Button>
    )
}

export default ThemeToggle