import React from 'react'
function TabButton({ active, selectTab, children }) {
    const buttonClasses = active
        ? "text-white border-b-2 border-purple-500"
        : "text-[#ADB7BE]"

    return (
        <button onClick={selectTab} className="mr-4">
            <p className={`font-semibold hover:text-white  ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}
export default TabButton