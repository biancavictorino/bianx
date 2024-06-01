import React from 'react'

const ProjectsItem = ({img, title, lang1, lang2}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-giving'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <div className='flex justify-between w-10 mt-2 gap-2'>
          <img src={lang1} alt="/" classname='w-[1rem] h-[1rem]'/>
         
        </div>
      </div>
    </div>
  )
}

export default ProjectsItem