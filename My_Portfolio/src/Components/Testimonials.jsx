import React, { useEffect } from "react";
import me2 from "../assets/me2.png";
import Aos from "aos";
const Testimonials = () => {
  useEffect(() => {
    Aos.init({
      offset: 400,
      duration: 700,
    });
  }, []);
  return (
    <div className="wrapper w-full h-full bg-ExtraDarkColor p-[100px] sm:pt-[40px] sm:pl-[20px] sm:pr-[20px]">
      <div className="title text-[80px] text-PrimiaryColor josefin-sans-bold pt-[40px] sm:text-[50px] sm:pt-[20px]">
        Testimonials
      </div>
      <div className="items relative  ">
        <img
          data-aos="fade-up"
          className="backgroundOfImage w-[500px] sm:w-[300px] h-[500px] sm:h-[300px] bg-SecondaryColor sm:hidden"
          style={{
            borderRadius: "51% 49% 45% 55% / 46% 45% 55% 54%  ",
            position: "absolute",
            right: "-50px",
          }}
          src={me2}
          alt=""
        />
        <div className="item w-[800px] sm:w-[100%] sm:flex sm:flex-col sm:gap-[10px] ">
          <div className="heading flex items-center sm:mt-[30px]">
            <hr className="w-[60px] h-[4px] ml-[30px] bg-SecondaryColor rounded sm:hidden" />
            <div className="title text-SecondaryColor text-[25px] pl-[20px] sm:pl-[5px] sm:text-[20px]">
              Software Engineering & Full Stack Development
            </div>
          </div>
          <div className="feedbacks  ml-[110px] text-PrimiaryColor text-[18px] josefin-sans-light p-[20px] sm:ml-[0px]">
            <div className="desp ">
              "Working with Robin was an excellent experience filled with
              valuable learning opportunities. I look forward to collaborating
              on more projects in the future."
            </div>
            <div className="person text-[16px] text-[#9c9ca2] josefin-sans-bold pt-[10px]">
              Deepanshu Rathore
            </div>
          </div>
          <div className="feedbacks  ml-[110px] text-PrimiaryColor text-[18px] josefin-sans-light p-[20px] sm:ml-[0px]">
            <div className="desp ">
              "The product developed by Robin was outstanding. The quality and
              attention to detail were impressive, and it exceeded our
              expectations."
            </div>
            <div className="person text-[16px] text-[#9c9ca2] josefin-sans-bold pt-[10px]">
              Raghav, CEO of Electronic Junction
            </div>
          </div>
          <div className="feedbacks ml-[110px] text-PrimiaryColor text-[18px] josefin-sans-light p-[20px] sm:ml-[0px]">
            <div className="desp">
              "The results are amazing—keep up the great work!"
            </div>
            <div className="person text-[16px] text-[#9c9ca2] josefin-sans-bold pt-[10px]">
              Dev Sharma
            </div>
          </div>
          <div className="heading flex items-center sm:items-center sm:mt-[30px] ">
            <hr className="w-[60px] h-[4px] ml-[30px] bg-SecondaryColor rounded sm:hidden" />
            <div className="title text-SecondaryColor text-[25px] pl-[20px] sm:pl-[5px] sm:text-[20px]">
              Educational Content Creator
            </div>
          </div>
          <div className="feedbacks  ml-[110px] text-PrimiaryColor text-[18px] josefin-sans-light p-[20px] sm:ml-[0px]">
            <div className="desp ">
              "Thank you for providing such amazing lectures for free. Keep up
              the great work!"
            </div>
            <div className="person text-[16px] text-[#9c9ca2] josefin-sans-bold pt-[10px]">
              Sneha Singh
            </div>
          </div>
          <div className="feedbacks  ml-[110px] text-PrimiaryColor text-[18px] josefin-sans-light p-[20px] sm:ml-[0px]">
            <div className="desp ">
              "Your teaching method is exceptional. You have a great
              understanding of where students might struggle and explain those
              areas in depth."
            </div>
            <div className="person text-[16px] text-[#9c9ca2] josefin-sans-bold pt-[10px]">
              Devang Kushwaha
            </div>
          </div>
          <div className="heading flex items-center sm:mt-[30px]">
            <hr className="w-[60px] h-[4px] ml-[30px] bg-SecondaryColor rounded sm:hidden" />
            <div className="title text-SecondaryColor text-[25px] pl-[20px] sm:pl-[5px] sm:text-[20px]">
              Writer
            </div>
          </div>
          <div className="feedbacks  ml-[110px] text-PrimiaryColor text-[18px] josefin-sans-light p-[20px] sm:ml-[0px]">
            <div className="desp ">
              "Exceptional work on the writing. The quality and depth of your
              content are impressive."
            </div>
            <div className="person text-[16px] text-[#9c9ca2] josefin-sans-bold pt-[10px]">
              Jatin Arora, Associate at PWC
            </div>
          </div>
          <div className="feedbacks  ml-[110px] text-PrimiaryColor text-[18px] josefin-sans-light p-[20px] sm:ml-[0px]">
            <div className="desp ">
              "You’re always an inspiration. Your work consistently motivates
              and impresses."
            </div>
            <div className="person text-[16px] text-[#9c9ca2] josefin-sans-bold pt-[10px]">
              Gautam Singh Jyala
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
