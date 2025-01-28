'use client'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import useActiveSectionView from '@/hooks/useActiveSectionView';
import { cn } from '@/lib/utils';



const Experience = () => {
    const { ref } = useActiveSectionView("Experience");
    return (
        <section ref={ref} id='experience' className='py-24 dark:text-primary-foreground'>
            <h2 className='text-3xl font-semibold tracking-tight lg:text-4xl mb-6 xl:mb-16 text-center capitalize '>
                Experience
            </h2>

            <VerticalTimeline lineColor="">
                {
                    experiencesData.map((exp, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    background: 'rgb(var(--card))',
                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    border: "none",
                                    borderRadius: "1rem",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem",

                                }}
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid #9ca3af"
                                }}
                                date={exp.date}
                                icon={exp.icon}
                                iconStyle={{
                                    background: "rgb(var(--card))",
                                    color: "rgb(var(--foreground))",
                                    fontSize: "1.5rem",
                                }}
                                visible={true}
                            >
                                <h3 className="font-semibold capitalize">{exp.title}</h3>
                                <p className="font-normal !mt-0">{exp.location}</p>
                                <p className="!mt-1 !font-normal text-gray-600 dark:text-white/75">
                                    {exp.description}
                                </p>


                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    )
}

export default Experience