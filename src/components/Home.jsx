import React from 'react'
import HeroImage from '../assets/heroimage.png'
import LinkedIn from '../assets/linkedin.png'
import GitHub from '../assets/github.png'
import BeHance from '../assets/behance.png'
import Facebook from '../assets/facebook.png'
import { TypeAnimation } from 'react-type-animation';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Home = () => {
  
  return (
      <div name='Home' className='flex flex-col items-center h-screen w-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 mt-5'>
          <div className='flex gap-2 items-center'>
              <h4 className='text-black bg-white p-2 px-5 rounded-full text-sm'>Hi! I am Bianca Victorino an aspiring</h4>
              <p className='text-giving text-sm'>
              <TypeAnimation className='bg-white py-2 px-5 rounded-full'
                sequence={[
                  'UI Designer',
                  1000, 
                  'Graphic Designer',
                  1000,
                  'Developer',
                  1000
                ]}
                wrapper="div"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
              </p>
          </div>
          <div className='my-4'>
              <img src={ HeroImage } alt="" />
          </div>
          <div>
              <button className='w-fit px-6 py-2 my-2 flex items-center rounded-md border border-white text-white cursor-pointer hover:bg-gradient-to-r from-pink-500 to-purple-400 hover:scale-105 duration-200 hover:border-none'>
                Projects
                <span>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </button>
          </div>
        </div>
        <div className='flex w-44 flex-row items-center justify-between py-4'>
            <a href="" className='hover:scale-105 duration-200'><img src={ LinkedIn } alt="" /></a>
            <a href="" className='hover:scale-105 duration-200'><img src={ GitHub } alt="" /></a>
            <a href="" className='hover:scale-105 duration-200'><img src={ BeHance } alt="" /></a>
            <a href="" className='hover:scale-105 duration-200'><img src={ Facebook } alt="" /></a>
        </div>
      </div>
  )
}

export default Home