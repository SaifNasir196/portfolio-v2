import React from 'react'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'
import { fadeInAnimationVariants } from '@/lib/utils'


const Skills = () => {
  return (
    <div className='text-center'>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill, index) => (
                    <motion.li key={index}
                        className='bg-white border border-black/[0.1] rounded-xl px-5 py-3'
                        variants={fadeInAnimationVariants(0.05)}
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