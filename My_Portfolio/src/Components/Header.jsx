import React from 'react'
import logo from '../assets/logo.jpeg'
import Drawer from './Drawer'

const Header = () => {
  const screen = window.innerWidth <= 600;
  return (
    <div className='wrapper w-[100vw] h-[160px] bg-DarkColor py-6 px-6 pr-[300px] sm:pr-[15px] sm:p-[15px] overflow-hidden'>
      <div className="inner-wrapper w-full h-full flex justify-between items-center space-x-12 sm:space-x-8">
        <div className="logo flex-3 w-full h-full flex justify-between items-center sm:flex-col sm:flex-1 sm:justify-center sm:items-start">
          <a href="#"><img className='h-[4.3rem] w-[3.5rem] object-cover ml-[80px] sm:h-[3.3rem] sm:w-[2.7rem] sm:ml-[0]' src={logo} alt="" /></a>
        </div>
        {!screen && <div className="links flex justify-between flex-4">
          <a className="text-sm md:text-base lg:text-[22px] sm:text-[18px] text-PrimiaryColor josefin-sans-bold hover:josefin-sans-bold hover:text-PrimiaryColor transition-colors duration-500" href="#toolbox"> My ToolBox </a>
          <a className="text-sm md:text-base lg:text-[22px] sm:text-[18px] text-LightPrimaryColor josefin-sans-bold hover:josefin-sans-bold hover:text-PrimiaryColor transition-colors duration-500" href="#craft"> My Craft </a>
          <a className="text-sm md:text-base lg:text-[22px] sm:text-[18px] text-LightPrimaryColor josefin-sans-bold hover:josefin-sans-bold hover:text-PrimiaryColor transition-colors duration-500" href="#journey"> My Journey </a>
          <a className="text-sm md:text-base lg:text-[22px] sm:text-[18px] text-LightPrimaryColor josefin-sans-bold hover:josefin-sans-bold hover:text-PrimiaryColor transition-colors duration-500" href="#letstalk"> Let's Talk </a>
        </div>}
      </div>
      {screen && <div className="drawer-container overflow-hidden">
        <Drawer />
      </div>}
    </div>
  )
}

export default Header;
