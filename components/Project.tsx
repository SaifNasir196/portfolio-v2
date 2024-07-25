'use client'
import React, { useRef } from 'react'
import { TiThLargeOutline } from 'react-icons/ti'
import { projectsData } from '@/lib/data'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ImGithub } from "react-icons/im";
import { LinkIcon } from 'lucide-react';




type ProjectProps = (typeof projectsData)[number];


const Project = ({title, description, tags, imageUrl, githubLink, siteLink}: ProjectProps  ) => {
  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "1.25 1"],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
      className="mb-3 sm:mb-8 last:mb-0 group"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
    >
      <article className='flex  bg-white transition-all dark:bg-accent dark:text-primary-foreground max-w-[48rem] overflow-hidden sm:h-full shadow-lg  sm:pr-8 relative group-even:pl-5
         hover:bg-gray-100 rounded-2xl'
      >

        <div className=" pt-4 pb-10 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col gap-4 h-full group-even:ml-[18rem]">

          <h3 className='text-2xl font-medium' > {title} </h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-gray-400' > {description} </p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
              {tags.map((tag, index) => (
                  <li className='bg-primary dark:bg-secondary text-white dark:text-primary px-3 py-1 text-[0.75rem] uppercase tracking-wider rounded-full' key={index}> {tag} </li>
              ))}
          </ul>
        </div>

        {/* <div className=""> */}
          <div className="absolute -bottom-16 flex gap-6 right-10 group-even:right-[initial] group-even:left-10 z-10 group-hover:bottom-8 transition-all">
            <Link href={githubLink ?? `${process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_DEV_URL : process.env.NEXT_PUBLIC_PROD_URL}`}>
              <ImGithub size={40} className='text-gray-700 hover:text-gray-950 scale-110 hover:scale-125'/>
            </Link>
            <span className='ring ring-gray-700 hover:ring-black rounded-full p-1 bg-gray-700 hover:bg-black hover:scale-110 transition-all'>
            <Link href={siteLink ?? `${process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_DEV_URL : process.env.NEXT_PUBLIC_PROD_URL}`}>
                <LinkIcon size={30} className='text-white'/>
              </Link>
            </span>
          </div>

        <Image
            src={imageUrl}
            alt='Project'
            quality={95}
            className="absolute top-8 -right-40 w-[30rem] rounded-t shadow-2xl group-even:right-[initial] group-even:-left-40
              group-hover: -translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105
              group-even:group:hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition"
        />
        {/* </div> */}

      </article>
    </motion.div>
  )
}

export default Project