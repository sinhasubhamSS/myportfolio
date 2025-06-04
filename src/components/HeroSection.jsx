'use client'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
function HeroSection() {
    return (
        <section className='lg:py-16'> 
            <div className="grid grid-cols-1 lg:grid-cols-12 ">
                <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className='text-white mb-4  text-4xl sm:text-5xl lg:text-8x lg:leading-normal font-extrabold '>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                            Hello, I'm{""} </span>

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                '  Shubham',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web Developer',
                                1000,
                                'UI/UX Designer',
                                1000,
                                'Seo Optimizer',
                                1000
                            ]}
                            wrapper="span"
                            speed={30}
                            className="block"
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE]  text-lg mb-6 lg:text-xl'>
                        Hi, I'm Shubham — a full-stack web developer with a passion for building modern, user-focused web applications.
                        I blend creativity with functionality to develop solutions that are fast, scalable, and easy to use.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me </button>
                        <button className='px-1 py-1   w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 '>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-5 md:ml-6 lg:mt-0 " >
                    <div className=" bg-[#181818] rounded-full w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/image.png"
                            alt="shubbham image"
                            width={300}
                            height={300}
                            className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        />
                    </div>


                </div>
            </div>
        </section >
    )
}

export default HeroSection