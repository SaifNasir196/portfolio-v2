'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import { BsFillSendFill } from "react-icons/bs";
import { Button } from './ui/button'
import useActiveSectionView from '@/hooks/useActiveSectionView'
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider'


const Home = () => {
    const MotionImage = motion(Image);
    const { ref } = useActiveSectionView("Home");
    const {setActiveSection, setLastClickTime} = useActiveSectionContext();

    return (
        <section id="home" className="gap-12 max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-primary scroll-mt-[100rem] mb-64" ref={ref}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* left text */}
                <motion.div className="flex-1" initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.25}}>
                    {/* heading */}
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
                        Hello, my name is Saif Nasir
                    </h1>
                    {/* role */}
                    <div className="text-2xl sm:text-3xl font-semibold text-secondary mb-8">
                        <TypeAnimation
                            sequence={[
                                "I'm a Web Developer",
                                200,
                                "I'm a Backend Engineer",
                                1000,
                                "I'm a Designer",
                                1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            wrapper="span"
                            className="text-secondary"
                        />
                    </div>
                    {/* buttons */}
                    <div className="flex flex-wrap gap-3 mb-6 grow">
                        <Link href='#contact'>
                            <Button
                                className="px-5 gap-x-3 rounded-full focus:scale-110 hover:scale-105 active:scale-100"
                                onClick={() => {
                                    setActiveSection("Contact")
                                    setLastClickTime(Date.now())
                                }}
                            >
                                Contact me <BsFillSendFill size={18} />
                            </Button>
                        </Link>
                        <Link href="/CV.pdf" >
                            <Button variant={'secondary'} className='py-5 gap-x-3 bg-secondary text-primary rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-100 transition'> Resume <FaFileDownload size={18}  /> </Button>
                        </Link>

                        <Link href="https://linkedin.com/in/saif-nasir" target="_blank" rel="noopener noreferrer">
                            <Button variant={'secondary'} className='px-3  rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-100 transition' > <FaLinkedin className='text-primary' size={20} /> </Button>
                        </Link>

                        <Link href="https://github.com/SaifNasir196" target="_blank" rel="noopener noreferrer">
                            <Button variant={'secondary'} className='px-3 bg-secondary rounded-full outline-none focus:scale-115 hover:scale-105 active:scale-100 transition' > <FaGithub className='text-primary' size={20} /> </Button>
                        </Link>
                    </div>
                </motion.div>
                
                <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="w-64 h-64 relative">
                        <MotionImage
                            src="/portrait.jpeg"
                            fill
                            style={{ objectFit: 'cover' }}
                            quality={95}
                            priority
                            alt="Saif Portrait"
                            className='rounded-full border-4 border-secondary'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "tween", stiffness: 260, damping: 20, delay:0.5 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
