import React from 'react'

const About = () => {
  return (
    <div className='bg-[#FFBB5C] min-h-screen w-full flex justify-center '>
      <div className='my-20 p-20 flex flex-col justify-center bg-white min-h-[70vh] min-w-[55%] max-w-[70%]'>
        {/* <img src="" alt="my pic" srcset="" /> */}
        
        <div className="about-text">
          <h1 className='text-4xl pb-4'>HEY FELLAS 👋,</h1>
          <p>I am Rohit, who build this application.</p>
          <p>I'm a tech enthusiast who also happens to have a Master's in Computer Applications from Vellore Institute of Technology 🤷‍♂️. </p>
          <p>This is just a hobby project that I have been doing to learn MERN Stack, now I am so good at this that don't have a job 😔.</p>
          <div>
            <p>If you wanted to contact me</p>
            <div className="con-btn">
              <div className="github"></div>
              <div className="linkedIn"></div>
              <div className="x"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About