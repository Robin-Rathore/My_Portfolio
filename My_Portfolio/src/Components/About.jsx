import React from 'react'

const About = () => {
  
  return (
    <div className='wrappper w-full h-full bg-ExtraDarkColor pt-[200px] pb-[200px] pl-[120px] pr-[120px] sm:pt-[50px] sm:pb-[50px] sm:pr-[20px] sm:pl-[20px] '>
      <p className='heading text-PrimiaryColor text-[70px] josefin-sans-bold sm:text-[30px] ' > About</p>
        <div className="context w-full h-full flex gap-10 sm:gap-4">
            <hr className='!w-[300px] h-[5px] mt-[21px] bg-SecondaryColor rounded sm:w-[100px] sm:mt[15px] sm:hidden' />
            <p className='text-PrimiaryColor text-[30px] josefin-sans-light sm:text-[20px] sm:mt-[10px] ' > Hey there!, I’m <p className='text-SecondaryColor'>Robin Rathore! </p> a Computer Science enthusiast, i love to develop real life applications, i am good in problem solving. Apart from my technical skills i posses good interpersonal and oratorical skills. i am good at presentations and public speaking, Always eager to learn new tech and solve problems.. Proficient in the <p className='text-SecondaryColor'>MERN stack, Firebase, and DSA,</p> I’m also exploring the exciting realms of <p className='text-SecondaryColor'>AI and ML.</p> Passionate about creating solutions and exploring the world through reading, cooking, and travel. Let’s connect and build something amazing!</p>
        </div>
    </div>
  )
}

export default About
