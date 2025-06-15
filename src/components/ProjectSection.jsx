'use client'

import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: 'React Portfolio Website',
        description: 'Project 1 description',
        image: '/projects/project1.png', 
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: 'https://myportfolio-sinhasubhamss-projects.vercel.app/',
    },
    {
        id: 2,
        title: "Doctor's website",
        description: 'Project 2 description',
        image: '/projects/project2.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: 'https://doctor-react-mocha.vercel.app/',
    },
    {
        id: 3,
        title: ' Travelling E-commerce Application',
        description: 'This is built with html css and javascript',
        image: '/projects/project3.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: 'https://travelecomshop.vercel.app/',
    },
    {
        id: 4,
        title: 'Live Chat',
        description: 'First mern project i did with websocket',
        image: '/projects/project4.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: 'https://chatapp-lyart-three-56.vercel.app',
    },
    {
        id: 5,
        title: 'React Appwrite Blog website',
        description: 'Authentication and CRUD operations',
        image: '/projects/project5.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/sinhasubhamSS/Appwrite-blog-website',
        previewUrl: 'https://github.com/sinhasubhamSS/Appwrite-blog-website',
    },
    {
        id: 6,
        title: 'Full-stack Roadmap',
        description: 'Project 6 description',
        image: '/projects/image06.webp',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
]

function ProjectItem({ project, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.li
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: isInView ? index * 0.2 : 0, // Stagger delay only if in view
            }}
        >
            <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
        </motion.li>
    )
}

function ProjectSection() {
    const [tag, setTag] = useState('All')

    const handleTabChange = (newTag) => setTag(newTag)

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    )

    return (
        <section id="projects">
            <h2 className='text-center text-white text-4xl font-bold mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                {['All', 'Web'].map((tagName) => (
                    <ProjectTag
                        key={tagName}
                        onClick={handleTabChange}
                        name={tagName}
                        isSelected={tag === tagName}
                    />
                ))}
            </div>

            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredProjects.map((project, index) => (
                    <ProjectItem key={project.id} project={project} index={index} />
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection
