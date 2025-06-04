'use client'

import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/projects/image01.webp",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"

    },
    {
        id: 2,
        title: "Potography Portfolio Website",
        description: "Project 2 description",
        image: "projects/image02.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "E-commerce Application",
        description: "Project 3 description",
        image: "/projects/image03.jpeg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Food Ordering Application",
        description: "Project 4 description",
        image: "projects/image04.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "React Firebase Template",
        description: "Authentication and CRUD operations",
        image: "/projects/image00.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 6,
        title: "Full-stack Roadmap",
        description: "Project 5 description",
        image: "/projects/image06.webp",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
];
function ProjectSection() {
    const [tag, setTag] = useState('All');
    const handleTabChange = (newTag) => {
        setTag(newTag);
    }
    const filteredProjects = projectsData.filter(project => project.tag.includes(tag));

    return (
        <>
            <h2 className='text-center text-white text-4xl font-bold mt-4 mb-8 md:mb-12'>My Projects </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTabChange}
                    name='All'
                    isSelected={tag === 'All'}
                />
                <ProjectTag onClick={handleTabChange}
                    name='Web'
                    isSelected={tag === 'Web'}
                />

            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    filteredProjects.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}

                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />)
                }

            </div>
        </>
    )
}

export default ProjectSection