import React, {useState} from 'react'
import {FaBars , FaTimes} from "react-icons/fa";
import logo from '../assets/logo.png';

const NavBar = () => {

    const [nav, setNav] = useState(false)

  return (
    <div className='flex justify-between items-center w-full h-20 text-white border-b-2 border-primary-50 px-20'>
        <div>
            <img src={logo} alt="" />
        </div>

        <ul className='hidden md:flex'>
            <li className='px-4 cursor-pointer font-light hover:scale-105 duration-200'>Home</li>
            <li className='px-4 cursor-pointer font-light hover:scale-105 duration-200'>Projects</li>
            <li className='px-4 cursor-pointer font-light hover:scale-105 duration-200'>About</li>
            <li className='px-4 cursor-pointer font-light hover:scale-105 duration-200'>Contact</li>
        </ul>

        <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-2 z-10 text-gray-600'>
            { nav ? (
                
                <FaTimes size={20}/>
                
            ) 
            : (
                <FaBars size={20}/>
              )
            }
        </div>
       
    </div>

  )
}

export default NavBar