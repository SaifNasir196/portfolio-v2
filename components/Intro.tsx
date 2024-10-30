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
import { fadeInAnimationVariants, tweenInAnimationVariants } from '@/lib/utils'

const fadeInAnimation = fadeInAnimationVariants(0.2);

const Home = () => {
    const MotionImage = motion(Image);
    const { ref } = useActiveSectionView("Home");
    const { setActiveSection, setLastClickTime } = useActiveSectionContext();

    return (
        <section id="home" className="gap-12 max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-primary dark:text-primary-foreground scroll-mt-[100rem] mb-28" ref={ref}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* left text */}
                <div
                    className="flex-1"
                >
                    {/* heading */}
                    <motion.h1
                        className="text-4xl font-bold tracking-tight lg:text-5xl mb-4"
                        variants={fadeInAnimation}
                        initial="initial"
                        animate="amimate"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={1}
                    >
                        Hello, my name is Saif Nasir
                    </motion.h1>
                    {/* role */}
                    <motion.div
                        className="text-2xl sm:text-3xl font-semibold text-secondary mb-8"
                        variants={fadeInAnimation}
                        initial="initial"
                        animate="amimate"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={2}
                    >
                        <TypeAnimation
                            sequence={[
                                "I'm a Web Developer",
                                2500,
                                "I'm a Backend Engineer",
                                2500,
                                "I'm a Software Developer",
                                2500,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            wrapper="span"
                            className="text-secondary"
                        />
                    </motion.div>

                    {/* buttons */}
                    <motion.div
                        className="flex flex-wrap gap-3 mb-6 grow"
                        variants={fadeInAnimation}
                        initial="initial"
                        animate="amimate"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={3}
                    >
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
                        <Link href="/resume.pdf" >
                            <Button variant={'secondary'} className='py-5 gap-x-3 bg-secondary text-primary rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-100 transition'> Resume <FaFileDownload size={18} /> </Button>
                        </Link>

                        <Link href="https://linkedin.com/in/saif-nasir" target="_blank" rel="noopener noreferrer">
                            <Button variant={'secondary'} className='px-3  rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-100 transition' > <FaLinkedin className='text-primary' size={20} /> </Button>
                        </Link>

                        <Link href="https://github.com/SaifNasir196" target="_blank" rel="noopener noreferrer">
                            <Button variant={'secondary'} className='px-3 bg-secondary rounded-full outline-none focus:scale-115 hover:scale-105 active:scale-100 transition' > <FaGithub className='text-primary' size={20} /> </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* right image */}
                <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="w-64 h-64 relative">
                        <MotionImage
                            src="/portrait.png"
                            fill
                            // style={{ objectFit: 'cover' }}
                            quality={95}
                            alt="Saif Portrait"
                            className='rounded-full shadow-md'
                            variants={tweenInAnimationVariants}
                            initial='initial'
                            animate='animate'
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={0.2}



                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
