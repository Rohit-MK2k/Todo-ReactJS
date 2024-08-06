import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className='bg-[#FFBB5C] min-h-screen w-full flex justify-center '>
      <div className='my-20 p-40 flex flex-row items-center justify-center gap-10 bg-white min-h-[70vh] min-w-[55%] max-w-[70%]'>
        <div className='max-w-[20rem] max-h-[20rem] min-w-[12rem] min-h-[12rem] object-cover'>
          <img src="https://res.cloudinary.com/dccrkvgce/image/upload/f_auto,q_auto/v1/TODO-Image-lib/wz8fhn9xhyxpxuhvzouz" alt="my pic" srcset=""className='w-48 h-48 rounded-full object-cover'/>
        </div>
        
        <div className="about-text">
          <p>
            <h1 className='text-4xl pb-4'>
              HEY FELLAS 👋,
            </h1>
            I am Rohit, who build this application.
            I'm a tech enthusiast who also happens to have a Master's in Computer Applications from Vellore Institute of Technology 🤷‍♂️. 
            This is just a hobby project that I have been doing to learn MERN Stack, now I am so good at this that don't have a job 😔.
          </p>
          <div className='pt-4'>
            <p>If you wanted to contact me</p>
            <div className="con-btn flex gap-10 flex-row pt-6">
              <a href='https://github.com/Rohit-MK2k' target="_blank" className="github text-4xl"><FaGithub /></a>
              <a href='https://www.linkedin.com/in/rohit-malakar-06630a196' target="_blank" className="linkedIn text-4xl"><FaLinkedin /></a>
              <a href='https://x.com/RohitMK2K' target="_blank" className="x text-4xl"><FaXTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About