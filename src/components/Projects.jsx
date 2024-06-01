import React from 'react'
import ProjectsItem from './ProjectsItem'
import sonyImg from '../assets/sony.png'
import behanceImg from '../assets/behance.png'
import figmaImg from '../assets/figma.png'

const Projects = () => {
  return (
    <div name='Projects' className='h-auto w-full p-4 py-16 bg-purple'>
      <div className='max-w-[1000px] m-auto px-20 pb-16'>
        <h1 className='text-3xl font-black text-center text-giving'>Projects</h1>
          <div className='grid mt-8 sm:grid-cols-2 gap-12'>
            <ProjectsItem img={sonyImg} title='UI - Sony Redesign' lang1={figmaImg} />
            <ProjectsItem img={sonyImg} title='Sony' />
            <ProjectsItem img={sonyImg} title='Sony' />
            <ProjectsItem img={sonyImg} title='Sony' />
          </div>
      </div>
    </div>
  )
}

export default Projects