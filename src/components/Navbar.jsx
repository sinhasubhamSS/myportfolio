'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'
function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const navLinks = [
    {
      title: "About",
      path: "#about"
    },
    {
      title: "Projects",
      path: "#projects"
    },
    {
      title: "Contact",
      path: "#contact"
    }

  ]
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] border border-[#33353F]' >
      <div className="flex flex-wrap items-center justify-between mx-auto  p-4 ">
        <Link href={"/"} className='text-2xl  md:text-5xl text-white font-semibold'>
        
        </Link>
        <div className='mobile-menu block md:hidden'>
          {/* notnavbar open true then show for open
        */}
          {!navbarOpen ? (<button
            onClick={() => (setNavbarOpen(true))}
            className=' flex items-center px-3 py-2
           border rounded-border-slate-200 text-slate-200 
           hover:text-white '>
            <Bars3Icon className='h-5 w-5' />   </button>) :
            (<button className=' flex items-center px-3 py-2
           border rounded-border-slate-200 text-slate-200 
           hover:text-white'
              onClick={() => (setNavbarOpen(false))}><XMarkIcon className='h-5 w-5' /></button>)
          }

        </div>
        <div className="menu hidden md:block  md:w-auto" id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 '>

            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>

              ))
            }

          </ul>

        </div>


      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav >
  )
}

export default Navbar