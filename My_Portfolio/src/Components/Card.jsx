import React from 'react'

const Card = ({image, name}) => {
  return (
    <div className='wrapper text-PrimiaryColor hover:text-ExtraDarkColor flex justify-center flex-col hover:text-ExtraDarkColor items-center w-[300px] h-[300px] bg-CardColor rounded-[25px] m-[15px] hover:bg-SecondaryColor transition-colors duration-500 gap-[40px] sm:w-[150px] sm:h-[150px] sm:rounded-[15px] sm:m-[10px] sm:gap-[10px] '>
      <img className='w-[80px] h-[80px] sm:w-[40px] sm:h-[40px] ' src={image} alt="" />
      <p className=' text-[40px] josefin-sans-light sm:text-[18px]' >{name}</p>
    </div>
  )
}

export default Card
