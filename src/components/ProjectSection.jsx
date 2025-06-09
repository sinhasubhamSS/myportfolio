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
        image: '/projects/image01.webp',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: 'https://myportfolio-sinhasubhamss-projects.vercel.app/',
    },
    {
        id: 2,
        title: "Doctor's website",
        description: 'Project 2 description',
        image: '/projects/image02.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: 'https://doctor-react-mocha.vercel.app/',
    },
    {
        id: 3,
        title: 'E-commerce Application',
        description: 'Project 3 description',
        image: '/projects/image03.jpeg',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 4,
        title: 'Food Ordering Application',
        description: 'Project 4 description',
        image: '/projects/image04.png',
        tag: ['All', 'Mobile'],
        gitUrl: '/',
        previewUrl: '/',
    },
    {
        id: 5,
        title: 'React Firebase Template',
        description: 'Authentication and CRUD operations',
        image: '/projects/image00.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/',
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
        <section>
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
