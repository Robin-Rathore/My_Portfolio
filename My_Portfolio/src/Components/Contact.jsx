import React from "react";
import "../index.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SettingsPhoneOutlinedIcon from "@mui/icons-material/SettingsPhoneOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { WhatsApp } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Code } from "@mui/icons-material";
// import whatsapp from "../assets/whatsapp.png";
// import linkedin from "../assets/linkedin.png";
import leetcode from "../assets/leetcode.svg";
import { useMediaQuery } from "@mui/material";
const Contact = () => {
    const a = window.innerWidth <= 600;
    const iconSize = a ? 30 : 50;


  return (
    <>
      <div className="wrapper w-full h-[500px] bg-DarkColor relative">
        <div className="divider_title flex justify-center items-center ">
          <hr className="w-[550px] h-[4px] bg-SecondaryColor rounded absolute left-0 top-0 sm:w-[100px] " />
          <div className="title text-PrimiaryColor text-[60px] josefin-sans-bold absolute top-[-40px] sm:text-[35px] sm:top-[-24px] ">
            Let's Talk
          </div>
          <hr className="w-[550px] h-[4px] bg-SecondaryColor rounded absolute right-0 top-0 sm:w-[100px]" />
        </div>
        <div className="main">
          <div className="main_wrapper flex flex-wrap justify-center items-center m-[150px] sm:m-[100px]">
            <a className="m-[20px]  " href="mailto:robinsingh248142@gmail.com">
              {" "}
              <div className=" hover:text-ExtraDarkColor josefin-sans-light box1 w-[380px] sm:w-[300px] h-[70px] bg-ExtraDarkColor  rounded-[15px] text-SecondaryColor text-[20px] sm:text-[16px] flex justify-center items-center gap-[15px] sm:gap-[10px]  ">
                <MailOutlineIcon className="connect-icon" style={{ fontSize: 45 }} />
                robinsingh248142@gmail.com{" "}
              </div>
            </a>
            <a className="m-[20px]" href="tel:+919720684865">
              <div className=" hover:text-ExtraDarkColor josefin-sans-light box1 w-[380px] h-[70px] sm:w-[300px] bg-ExtraDarkColor rounded-[15px] text-SecondaryColor text-[20px] sm:text-[16px] flex justify-center items-center gap-[50px] sm:gap-[30px]">
                <SettingsPhoneOutlinedIcon
                className="connect-icon"
                  style={{ fontSize: 45 }}
                />
                Wanna Connect on Call
              </div>
            </a>

            <a
              className="m-[20px]"
              href="https://drive.google.com/file/d/1N4PIJ5AkQKjVFfBt-7hzEBLoGh6YjjO6/view"
            >
              {" "}
              <div className=" hover:text-ExtraDarkColor josefin-sans-light box1 w-[380px] h-[70px] sm:w-[300px] bg-ExtraDarkColor rounded-[15px] text-SecondaryColor text-[20px] sm:text-[16px] flex justify-center items-center gap-[50px] sm:gap-[30px]">
                <AssignmentOutlinedIcon
                className="connect-icon"
                  style={{ fontSize: 45}}
                />
                Intrested In My Resume?
                {" "}
              </div>
            </a>
          </div>
        </div>
        <div className="divider_title flex justify-center items-center">
          <hr className="w-[530px] h-[4px] bg-SecondaryColor rounded absolute left-0 bottom-0 sm:w-[100px] " />
          <div className="title text-PrimiaryColor  text-[60px] josefin-sans-bold absolute bottom-[-40px] sm:bottom-[-26px] flex space-x-10 sm:text-[40px] sm:space-x-[15px] ">
            <div className="icon  text-PrimiaryColor ">
              <a href="https://instagram.com/robin_rathore0?igshid=YmMyMTA2M2Y="><FacebookOutlinedIcon className="icon" style={{fontSize:`${iconSize}px`}}/></a>
            </div>
            <div className="icon ">
                <a href="https://wa.me/919720684865"><WhatsApp className="icon"  style={{fontSize:`${iconSize}px`}}/></a>
            </div>
            <div className="icon ">
            <a href="https://www.linkedin.com/in/robin-rathore-833863238"><LinkedIn className="icon"  style={{fontSize:`${iconSize}px`}}/></a>
            </div>
            <div className="icon ">
            <a href="https://leetcode.com/Robin_Rathore"><Code className="icon"  style={{fontSize:`${iconSize}px`}}/></a>
            </div>
          </div>
          <hr className="w-[530px] h-[4px] bg-SecondaryColor rounded absolute right-0 bottom-0 sm:w-[100px] " />
        </div>
      </div>
      <div className="wrapper w-full h-[300px] bg-ExtraDarkColor flex justify-center items-center  ">
        <div className="title text-SecondaryColor text-[50px] josefin-sans-light sm:text-[30px] ">
          "Thanks For Scrolling"
        </div>
        
      </div>
      <div style={{display:"flex", gap:"10px"}} className="footer__copyright w-full h-full bg-ExtraDarkColor flex justify-center items-center">
          <div style={{display:"flex", gap:"10px"}}  className="copyright__content text-[15px] sm:text-[12px] text-LightPrimaryColor josefin-sans-light ">&copy; 2024, <a href="https://www.linkedin.com/in/robin-rathore-833863238" title="">Robin Rathore</a>. All rights reserved.</div>
        </div>
    </>
  );
};

export default Contact;
