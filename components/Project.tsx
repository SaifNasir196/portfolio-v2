'use client'
import React, { useRef } from 'react'
import { TiThLargeOutline } from 'react-icons/ti'
import { projectsData } from '@/lib/data'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';


type ProjectProps = (typeof projectsData)[number];


const Project = ({title, description, tags, imageUrl}: ProjectProps  ) => {
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
      <article className=' bg-white max-w-[48rem] sm:h-full shadow-lg overflow-hidden sm:pr-8 relative group-even:pl-5
         hover:bg-gray-100 transition rounded-2xl'
      >

        <div className="pt-4 pb-10 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col gap-4 h-full group-even:ml-[18rem]">

          <h3 className='text-2xl font-medium' > {title} </h3>
          <p className='mt-2 leading-relaxed text-gray-700' > {description} </p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
              {tags.map((tag, index) => (
                  <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}> {tag} </li>
              ))}
          </ul>
        </div>

        <Image
            src={imageUrl}
            alt='Project'
            quality={95}
            className="absolute top-8 -right-40 w-[28.25rem] rounded-t shadow-2xl group-even:right-[initial] group-even:-left-40
              group-hover: -translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105
              group-even:group:hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition"
        />

      </article>
    </motion.div>
  )
}

export default Project