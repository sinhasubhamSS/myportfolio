import React from 'react'
const achievementsList = [
    {
        metric: "Projects",
        value: "20",
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
                            <h2 className='text-white text-4xl font-bold'>{achievement.value}</h2>
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