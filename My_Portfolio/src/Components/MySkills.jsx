import React from 'react'
import Data from "./Data"
import Card from './Card'

const MySkills = () => {
  return (
    <div className='w-full h-full bg-ExtraDarkColor wrapper flex justify-center items-center flex-col'>
      <div className="title text-PrimiaryColor text-[70px] josefin-sans-bold sm:text-[35px] "> My Skills</div>
      <div className="wrapper flex m-[40px] justify-center items-center flex-wrap sm:m-[10px] ">
        {Data.map(item => (
            <Card  
                image={item.img}
                name={item.name} 
                key={item.id} // Ensure each item has a unique key
            />
            ))}
      </div>
    </div>
  )
}

export default MySkills
