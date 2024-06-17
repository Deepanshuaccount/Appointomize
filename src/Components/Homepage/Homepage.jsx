import React from 'react'
import '../Homepage/homepage.css';
// import Female from '../../assets/female-14.png';
import Contact from '../Contact/Contact';
import Typewriter from "typewriter-effect";
const Homepage = () => {
  return (
    <div className='Main-homepage'>
    <div className='wrapper'>
    <div className='homepage'>
   <div className='overlay-bg'></div>
   <div className='homepage-content'>
   <div className='homepage-text'>
   <div className='wrap-homepage-content'>
   <h1>Streamline <Typewriter
       options={{
                      autoStart: true,
                      loop: true,
                      speed:30,
                      cursorBlinking:false,
                      // cursor,
                      //  cursorStyle: '|', 
                      delay: 75, // typing speed
                      deleteSpeed: 50, // delete speed
                    }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('<strong style="color:#ecd512">Beauty Salon')
                        .pauseFor(300)
                        .deleteChars(24)
                        .typeString('<strong style="color:#ecd512">Nail Salon')
                        .pauseFor(300)
                        .deleteChars(24)
                        .typeString('<strong style="color:#ecd512">Pet Salon')
                        .pauseFor(600)
                        .deleteChars(24)
                        .typeString('<strong style="color:#ecd512">Wellness Center')
                        .pauseFor(600)
                        .deleteChars(24)
                        .typeString('<strong style="color:#ecd512">Cosmetic Clinic')
                        .pauseFor(600)
                        .start();
                }}
            />Operations <br/>with AppointimiZe</h1>
   {/* <p>Simplify salon management tasks with our comprehensive <br/> solution for booking, staff, services, and more.</p> */}
   {/* <div className='icon-wrap'>
      <p className='quote'>"Saves time and boosts Productivity." </p>
      <p className='claire-text'><img src={Female} alt="Claire-clark-img" className='female-img' />Claire Clark</p>
      </div> */}
   </div>
   <div className='hexa-contact'>
   <Contact />
   </div>
   </div>
   {/* <div className='email-wrap'> */}
  
    {/* <input type="email" name="email" placeholder='Enter your email...' />
    <button className='get-started-btn'>Get Started</button> */}
   
   {/* </div> */}
   </div>
    </div>
    </div>
    </div>
  )
}

export default Homepage