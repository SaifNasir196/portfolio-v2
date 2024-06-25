'use client'
import React from 'react'

import {Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/tabs"
import { Briefcase } from "lucide-react"
import { infoData, coursesData, educationData } from "@/lib/data"
import useActiveSectionView from '@/hooks/useActiveSectionView'
import Skills from './Skills'

const About = () => {
    const { ref } = useActiveSectionView("About");
    
    return (
        <section className="max-w-5xl xl:h-[860px] p-20 xl:py-24 text-primary scroll-mt-32" id="about" ref={ref}>
            <div className="">
                <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl capitalize mb-6 xl:mb-16 text-center"> About me</h2>
                {/* tabs */}
                <div className="">
                    <Tabs defaultValue="personal">
                        <div className="w-[515px] mx-auto ">

                            <TabsList className='flex justify-center' >
                                <TabsTrigger className='w-[170px] p-1' value='personal'> Personal Info</TabsTrigger>
                                <TabsTrigger className='w-[170px]' value='qualifications'> Qualifications</TabsTrigger>
                                <TabsTrigger className='w-[170px]' value='skills' > Skills</TabsTrigger>
                            </TabsList>
                        </div>
                        {/* tabs content */}
                        <div className="text-lg mt-24 xl:mt-16 mx-auto">
                            <TabsContent value='personal'>
                                <div className="flex flex-col items-center justify-center text-center">
                                    <h3 className="text-2xl font-semibold mb-4"> Unmatched Service Quality for Over 10 Years</h3>
                                    <p className="max-w-[40rem] m-5 pb-10">
                                        I specialize in crafting intuitive websites with cutting-edge technology, 
                                        delivering dynamic and engaging user experiences.
                                    </p>

                                    {/* icons */}
                                    <div className="grid md:grid-cols-2 gap-4 mb-12 ml-20">
                                        {infoData.map((item, index) => <div className="" key={index}>
                                            <div className="w-fit flex text-left max-w-[20rem] gap-4" > <span className="text-primary">{item.icon}</span>
                                                {item.text}
                                            </div> 
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value='qualifications'>
                                <div className="grid md:grid-cols-2 gap-32">
                                    {/* education */}
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <Briefcase />
                                            <h4 className="capitalize font-medium"> Education </h4>
                                        </div>

                                        {/* list */}
                                        <div className="flex flex-col gap-y-12">
                                            {
                                                educationData.map(
                                                
                                                (item: { university?: string;  qualification?: string; years: string }, index: number) => {
                                                const { university, qualification, years } = item;
                                                return (
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                        </div>
                                                        <div className="max-w-56" >
                                                            <div className="font-semibold text-xl leading-none mb-2"> {university} </div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4"> {qualification} </div>
                                                            <div className="text-base font-medium"> {years} </div>
                                                        </div>
                                                    </div>
                                                );
                                                }
                                            )}
                                        </div>
                                    </div>
                                    {/* courses */}
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <Briefcase />
                                            <h4 className="capitalize font-medium"> Courses </h4>
                                        </div>

                                        {/* list */}
                                        <div className="flex flex-col gap-y-12">
                                            {coursesData.map((item: { company?: string; role?: string; years: string }, index: number) => {
                                                const { company, role, years } = item;
                                                return (
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                        </div>
                                                        <div className="max-w-56" >
                                                            <div className="font-semibold text-xl leading-none mb-2"> {company} </div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4"> {role} </div>
                                                            <div className="text-base font-medium"> {years} </div>
                                                        </div>
                                                    </div>
                                                );
                                                }
                                            )}
                                        </div>
                                    </div>

                                        
                                </div>
                            </TabsContent>

                            <TabsContent value='skills'>
                                <Skills />
                            </TabsContent>
                            
                        </div>
                        </Tabs>
                    </div>
                </div>
        </section>
    )
    
}

export default About

