'use client'

import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-5 grid grid-cols-2 gap-2 mt-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Prisma</li>
                <li>Redux</li>
                <li>Tailwind CSS</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-5 space-y-2 mt-2'>
                <li>
                    <strong>Birla Institute of Technology</strong>
                    <p className='text-sm text-gray-300'>Bachelors in computer Application</p>
                </li>
                <li>
                    <strong>Dav Public School</strong>
                    <p className='text-sm text-gray-300'>Higher Secondary Education</p>
                </li>
                <li>
                    <strong>Don Bosco School</strong>
                    <p className='text-sm text-gray-300'>Secondary Education</p>
                </li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-5 space-y-2 mt-2'>
                <li>Fullstack MERN Development</li>
                <li>Advanced React Development</li>
                <li>Data Structures & Algorithms</li>
                <li>Figma UI/UX Design</li>
                <li>AWS Cloud Practitioner</li>
            </ul>
        )
    },
]

function AboutSection() {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    };

    return (
        <section className='text-white py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-10 text-center'>About Me</h2>

                <div className='flex flex-col lg:flex-row gap-10 items-center'>
                    {/* Image Section - Balanced for all screens */}
                    <div className='w-full lg:w-2/5 flex justify-center'>
                        <div className='relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/30'>
                            <Image
                                src="/aboutmeh.png"
                                alt="Shubham - Full Stack Developer"
                                fill
                                className='object-cover'
                                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 30vw"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='w-full lg:w-3/5'>
                        <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 shadow-xl'>
                            <p className='text-lg mb-6 leading-relaxed'>
                                I'm a dedicated full-stack developer specializing in modern web applications.
                                With expertise in JavaScript, React, Node.js, and cloud platforms, I build
                                responsive, high-performance solutions focused on user experience.
                            </p>

                            <div className='flex flex-wrap gap-3 mb-6'>
                                <TabButton
                                    selectTab={() => handleTabChange("skills")}
                                    active={tab === "skills"}
                                >
                                    Skills
                                </TabButton>
                                <TabButton
                                    selectTab={() => handleTabChange("education")}
                                    active={tab === "education"}
                                >
                                    Education
                                </TabButton>
                                <TabButton
                                    selectTab={() => handleTabChange("certifications")}
                                    active={tab === "certifications"}
                                >
                                    Certifications
                                </TabButton>
                            </div>

                            <div className='min-h-[200px] bg-gray-800/50 rounded-xl p-5 transition-all duration-300'>
                                {TAB_DATA.find((t) => t.id === tab).content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection