import { motion } from 'framer-motion'
import React from 'react'

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" } // Added missing closing parenthesis
}

function TabButton({ active, selectTab, children }) {
    const buttonClasses = active
        ? "text-white"
        : "text-[#ADB7BE]"

    return (
        <button onClick={selectTab} className="mr-4">
            <p className={`font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}  
                variants={variants}
                className="h-1 bg-purple-500 mt-2 mr-3"
            />
        </button>
    )
}

export default TabButton