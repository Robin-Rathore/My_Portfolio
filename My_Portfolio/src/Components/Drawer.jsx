import React, { useEffect, useState } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (open && !event.target.closest('.drawer')) {
      setOpen(false);
    }
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleLinkClick = (event) => {
    setOpen(false);
  };

  return (
    <div>
      <button 
        className='p-0 mr-[30px] mt-[50px] rounded absolute top-0 right-0' 
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close drawer' : 'Open drawer'}
      >
        <DehazeIcon className='icon' style={{ width: "50px", height: "50px", color: "#ffc86b" }} />
      </button>
      <div 
        className={`drawer box2 w-[300px] fixed z-[999] top-0 right-0 h-[80vh] rounded bg-ExtraDarkColor text-white transition-transform duration-500 transform ${open ? 'translate-x-0' : 'translate-x-[100vw]'}`}
        aria-hidden={!open}
      >
        <button 
          className="m-[30px]" 
          onClick={() => setOpen(false)}
          aria-label="Close drawer"
        >
          <CloseIcon className='icon' style={{ width: "50px", height: "50px", color: "#ffc86b" }} />
        </button>
        <nav className="mt-[20px]">
          <ul className='m-[30px] flex flex-col gap-[20px]'>
            <li>
              <a 
                className="drawer-link text-sm md:text-base lg:text-[22px] sm:text-[20px] text-PrimiaryColor josefin-sans-bold hover:josefin-sans-bold hover:text-PrimiaryColor transition-colors duration-500" 
                href="#toolbox"
                onClick={handleLinkClick}
              >
                My ToolBox
              </a>
            </li>
            <li>
              <a 
                className="drawer-link text-sm md:text-base lg:text-[22px] sm:text-[20px] text-LightPrimaryColor josefin-sans-bold hover:josefin-sans-bold hover:text-PrimiaryColor transition-colors duration-500" 
                href="#craft"
                onClick={handleLinkClick}
              >
                My Craft
              </a>
            </li>
            <li>
              <a 
                className="drawer-link text-sm md:text-base lg:text-[22px] sm:text-[20px] text-LightPrimaryColor josefin-sans-bold hover:josefin-sans-bold hover:text-PrimiaryColor transition-colors duration-500" 
                href="#journey"
                onClick={handleLinkClick}
              >
                My Journey
              </a>
            </li>
            <li>
              <a 
                className="drawer-link text-sm md:text-base lg:text-[22px] sm:text-[20px] text-LightPrimaryColor josefin-sans-bold hover:josefin-sans-bold hover:text-PrimiaryColor transition-colors duration-500" 
                href="#letstalk"
                onClick={handleLinkClick}
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </nav>
        <a href="https://www.linkedin.com/in/robin-rathore-833863238">
        <button
                type="button"
                className='button_cart
                relative right-0 bottom-0 z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
                mt-[40px]
                px-20 py-4 font-semibold
                uppercase transition-all duration-500
                before:absolute before:inset-0
                before:-z-10 before:translate-x-[150%]
                before:translate-y-[150%] before:scale-[2.5]
                before:rounded-[100%] before:bg-SecondaryColor
                before:transition-transform before:duration-1000
                before:content-[""]
                text-PrimiaryColor
                hover:scale-105 hover:text-DarkColor
                hover:before:translate-x-[0%]
                hover:before:translate-y-[0%]
                active:scale-95
                sm:w-[250px] sm:h-[30px]
                sm:text-[12px] sm:justify-center sm:items-center sm-:px-0 sm:py-4
                mt-[100%]
                ml-[25px]'
                
                
              >
                <p>Contact Me</p>
              </button>
              </a>
        
      </div>
      
    </div>
  );
}

export default Drawer;
