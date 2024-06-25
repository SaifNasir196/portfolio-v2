'use client'
import React from 'react'
import { projectsData } from '@/lib/data'
import Project from './Project'
import useActiveSectionView from '@/hooks/useActiveSectionView'



const Projects = () => {
    const { ref } = useActiveSectionView("Projects");
    
    return (
        <section id='projects' className='scroll-mt-32' ref={ref}>
            <h2 className='text-3xl font-semibold tracking-tight lg:text-4xl mb-6 xl:mb-16 text-center capitalize'> My Projects </h2>

            <div className="">
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default Projects