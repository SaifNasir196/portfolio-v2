import React from 'react'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}
const Skills = () => {
  return (
    <div className='text-center'>
        <h2 className='text-2xl text-center font-medium mb-10'>
            My skills
        </h2>
        
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill, index) => (
                    <motion.li key={index}
                        className='bg-white border border-black/[0.1] rounded-xl px-5 py-3'
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        animate="amimate"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))
            }
        </ul>
    </div>
  )
}

export default Skills