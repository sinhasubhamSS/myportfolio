'use client'

import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => { return import("react-animated-numbers") }, { ssr: false })
const achievementsList = [
    {
        metric: "Projects",
        value: "30+",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "1.5k",
    },
    {
        metric: "Awards",
        value: "2",
    },
    {
        metric: "Years",
        value: "2",
    },
];
function AchievementSection() {
    return (
        <div className=' py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                {achievementsList.map((achievement, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center mx-4'>
                            <h2 className='text-white text-4xl font-bold flex flex-row gap-0.5'>
                                {achievement.prefix}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    className='text-white'
                                    configs={[
                                        { mass: 1, tension: 140, friction: 100 },
                                    ]}


                                />
                                {achievement.postfix}
                            </h2>
                            <p className='text-[#ADB7BE] text-base'>
                                {achievement.metric}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AchievementSection