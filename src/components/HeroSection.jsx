'use client'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

function HeroSection() {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start lg:gap-5"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Hello, I'm{' '}
                        </span>

                        <TypeAnimation
                            sequence={['Shubham', 1000, 'Web Developer', 1000, 'UI/UX Designer', 1000, 'SEO Optimizer', 1000]}
                            wrapper="span"
                            speed={30}
                            className="block"
                            repeat={Infinity}
                        />
                    </h1>

                    <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                        Hi, I'm Shubham — a full-stack web developer with a passion for building modern, user-focused web
                        applications. I blend creativity with functionality to develop solutions that are fast, scalable, and easy
                        to use.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center sm:items-start">
                        <div className="flex items-center text-[#ADB7BE]">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <a href="tel:+918340173491" className="hover:text-white transition-colors">
                                +91 8340173491
                            </a>
                        </div>
                        <div className="flex items-center text-[#ADB7BE]">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>New Delhi, Noida Sector 64</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mb-5 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="cursor-pointer px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-semibold shadow-md"
                        >
                            Hire Me
                        </button>

                        {/* ✅ Enhanced Download CV */}
                        <a
                            href="/shubham_resume.pdf"
                            download="Shubham_Sinha_Resume.pdf"
                            className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white font-semibold shadow-md inline-block"
                        >
                            <span className="flex items-center gap-2 bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                {/* Download Icon */}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 10l5 5 5-5" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12" />
                                </svg>
                                Download CV
                            </span>
                        </a>
                    </div>
                </motion.div>

                {/* Tech Icons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-5 md:ml-6 lg:mt-0"
                >
                    <div className="grid grid-cols-2 gap-4 w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] bg-[#181818] p-4 rounded-2xl shadow-lg lg:ml-1.5">
                        {[
                            { src: '/icons/nextjs.svg', alt: 'Next.js' },
                            { src: '/icons/react-js.svg', alt: 'React' },
                            { src: '/icons/mongodb.svg', alt: 'MongoDB' },
                            { src: '/icons/expressjs.svg', alt: 'Express' },
                        ].map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.4 }}
                                className="bg-[#121212] flex items-center justify-center rounded-xl relative"
                            >
                                <Image
                                    src={tech.src}
                                    alt={tech.alt}
                                    fill
                                    className="object-contain p-4"
                                    sizes="(max-width: 768px) 80px, 100px"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
