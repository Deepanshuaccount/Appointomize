import React from 'react'
import '../../Components/Banner/banner.css';
import HairSaloon from "../../assets/beauty-saloon.png";
import Nail from '../../assets/nail_saloon.png';
import Petsaloon from '../../assets/petsaloon.png';
import wellness from '../../assets/spa.png';
import Clinic from '../../assets/beautyclinic.png';
const SalonBanner = () => {
  return (
    <div className='main-salon-banner'>
      <div className='salon-banner-heading'>
     <h4>Spaces We Revolutionize</h4> 
    </div>
    <div className='salon-icon-wrap'>
  
    <div className='salon-text'>
  <img src={HairSaloon} alt="hair saloon " className='salon-icons' />
  <h4>Beauty Salon</h4>
  </div>
  <div className='salon-text'>
  <img src={Nail} alt="Nail saloon" className='salon-icons' />
  <h4>Nail Salon</h4>
  </div>
  <div className='salon-text'>
  <img src={Petsaloon} alt="Barber" className='salon-icons' />
  <h4>Pet Salon</h4>
  </div>
  <div className='salon-text'>
  <img src={wellness} alt="Barber" className='salon-icons' />
  <h4>Wellness Center</h4>
  </div>
  <div className='salon-text'>
  <img src={Clinic} alt="Barber" className='salon-icons' />
  <h4>Cosmetic Clinic</h4>
  </div>
  </div>
    </div>
  )
}

export default SalonBanner