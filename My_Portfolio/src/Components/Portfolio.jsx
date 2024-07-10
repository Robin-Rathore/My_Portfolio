import React from 'react'
import { project } from './Data'
import Project from './Project'

const Portfolio = () => {
  return (
    <>
    <div className='wrapper w-full h-full bg-ExtraDarkColor flex justify-center items-center pt-[100px] p-[50px] flex-col sm:pt-[50px] sm:p-[25px] ' >
        <span className='text-PrimiaryColor text-[80px] josefin-sans-bold sm:text-[50px] sm:mb-[20px]' > Portfolio</span>
        <div className="items flex flex-wrap justify-center items-center mb-[50px] ">
            {project.map(items => (
                    <Project image = {items.img} title = {items.name} desp = {items.desp} id = {items.id} link1 = {items.link1} link2 = {items.link2} />
            ))}
        </div>
    </div>
    <div className="box w-full h-5px " style={{boxShadow:" -2px 9px 31px 6px black"}}></div>
    </>
  )
}

export default Portfolio
