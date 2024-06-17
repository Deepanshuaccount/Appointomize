import React from 'react';
import '../SalonCard/saloncard.css';
import NailSalon from '../../assets/nails.jpg';
import Beauty from '../../assets/peeling.jpg';
import Pet from '../../assets/pet-salon.jpg';
import Wellness from '../../assets/salon.jpg';
import Cosmetic from '../../assets/homebanner.jpg';
import Barbershop from '../../assets/shop.jpeg';

const Saloncards = () => {
    const saloncardsdata = [
        { image: Beauty, heading: 'Beauty Salon' },
        { image: NailSalon, heading: 'Nail Salon' },
        { image: Pet, heading: 'Pet Salon' },
        { image: Wellness, heading: 'Wellness Center' },
        { image: Cosmetic, heading: 'Cosmetic Clinic' },
        { image: Barbershop, heading: 'Barber Shop' }
      ];
  return (
    <div className='main-salon-cards'>
    {saloncardsdata.map((item,id)=>(
        <>
        <div key={id} className='salon-cards-wrap'>
        <img src={item.image} alt="salon-card1" className='salon-card'/>
        <span className='salon-card-heading'>{item.heading}</span>
       
    </div>
    {/* <div key={id} className='salon-cards-wrap'>
        <img src={item.image} alt="salon-card1" className='salon-card'/>
        <span>Nails Crae</span>
       
    </div> */}
    </>
    ))}
      
       
   
    </div>
  )
}

export default Saloncards