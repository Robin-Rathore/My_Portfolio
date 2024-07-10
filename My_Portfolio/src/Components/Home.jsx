import React, { useEffect } from 'react'
import me from "../assets/me.png.jpg"
import Aos from 'aos';

const Home = () => {
    useEffect(() => {
        Aos.init({
          offset: 50,
          duration: 700,
        });
      }, []);
  return (
    <>
    <div className='wrapper w-full h-full bg-DarkColor flex custom-bottom-shadow ' >
      <div className="text py-[14rem] px-[8rem] sm:py-[2rem] sm:px-[1rem]">
        <h1 className='text-[45px] sm:text-[20px] josefin-sans-light text-PrimiaryColor'>
            I'M <span className='text-[70px] sm:text-[25px] text-SecondaryColor osefin-sans-bold'>Robin Rathore</span> <br/> MERN Stack Developer & <br/> Content Creator
        </h1>
        <a href="https://www.linkedin.com/in/robin-rathore-833863238">
        <button
                type="button"
                className='button_cart
                sm:hidden
                relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
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
                sm:w-[100px] sm:h-[30px]
                sm:text-[12px] sm:justify-center sm:items-center sm-:px-0 sm:py-4'
                
                
              >
                <p>Contact Me</p>
              </button>
              </a>
      </div>
      <div className="image w-[600px] z-[1] sm:w-[300px] sm:mr-[8px] sm:mb-[50px]">
        <img data-aos="fade-up" className="backgroundOfImage w-[500px] h-[650px] bg-SecondaryColor sm:w-[250px] sm:h-[300px] " style={{borderRadius:"70% 30% 37% 67% / 62% 59% 41% 38% "}} src={me} alt="" />
      </div>
      <div className="icons">

      </div>
    </div>
    <div className="box w-full h-5px " style={{boxShadow:" -2px 9px 31px 6px black"}}>

    </div>
    </>
  )
}

export default Home
