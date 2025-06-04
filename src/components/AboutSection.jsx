'use client'

import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Prisma</li>

            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content:
            (
                <ul className='list-disc pl-2'>
                    <li>Birla Institute of techonology</li>
                    <li>Dav Public School</li>
                    <li>Don Bosco School</li>
                </ul>
            )
    },
    {
        title: "Certifications",
        id: "certifications",
        content:
            (
                <ul className='list-disc pl-2'>
                    <li>Fullstack MERN development</li>
                    <li>React Development</li>
                    <li>Data Structure And Algorithm</li>
                    <li> Figma Design </li>
                    <li> AWS Cloud </li>
                </ul>
            )
    },


]
function AboutSection() {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransaction] = useTransition()
    const handleTabChange = (id) => {

        setTab(id)
    };

    return (
        <section className='text-white '>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 mt-5 md:items-stretch transition-all duration-500 ease-in-out'>

                <Image
                    src="/aboutmeh.png"
                    alt="shubbham about me image"
                    className='mt-15 transition-all duration-500 ease-in-out'
                    width={500}
                    height={500}

                />
                <div className='  mt-4 md:mt-0 text-left flex flex-col h-full w-full'>
                    <h2 className=' text-4xl font-bold text-white mb-4  '>About Me</h2>
                    <p className='text-base lg:text-lg'> I'm a dedicated full-stack developer with hands-on experience in designing and building responsive, high-performance web applications. My core stack includes JavaScript, React, Redux, Node.js, Express, and MongoDB, along with proficiency in HTML, CSS, and Tailwind CSS.

                        I take pride in writing clean, maintainable code and collaborating with teams to turn ideas into impactful solutions. I’m also familiar with deploying and scaling applications on platforms like AWS and Google Cloud.

                        Whether it's front-end UI/UX or back-end architecture, I enjoy every part of the development process — always eager to learn and grow with every project.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton
                            selectTab={() => (handleTabChange("skills"))}
                            active={tab === "skills"}>
                            {" "}
                            Skills{""}
                        </TabButton>
                        <TabButton
                            selectTab={() => (handleTabChange("education"))}
                            active={tab === "education"}>
                            {" "}
                            Education{""}
                        </TabButton>
                        <TabButton
                            selectTab={() => (handleTabChange("certifications"))}
                            active={tab === "certifications"}>
                            {" "}
                            Certifications{""}
                        </TabButton>


                    </div>
                    <div className='mt-8'>
                        {
                            TAB_DATA.find((t) => t.id === tab).content
                        }
                    </div>

                </div>

            </div>

        </section>
    )
}

export default AboutSection