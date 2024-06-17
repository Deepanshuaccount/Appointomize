import React from 'react'
import '../FeaturedCards/featurecard.css';
import Salon from '../../assets/cloud1.jpg';
import NailSalon from '../../assets/Appointments.jpg';
import PetSalon from '../../assets/Report1.jpg';
import ClientManagement from '../../assets/client1.jpg';
const FeaturedCards = () => {
  const featuredCards = [
    {
        imgSrc: Salon,
        altText: "card1",
        title: "Cloud-Based Platform",
        description: "Access your business management tools from anywhere, anytime with our secure, cloud-based platform. Enjoy the flexibility and convenience of managing your business operations remotely, without the hassle of traditional software installations."
    },
    {
        imgSrc: NailSalon,
        altText: "card1",
        title: "Appointment Management",
        description: "Effortlessly schedule, modify, and cancel appointments with our intuitive booking system. Stay organized and optimize your business's schedule to maximize productivity and customer satisfaction."
    },
    {
        imgSrc: PetSalon,
        altText: "card1",
        title: "Invoicing",
        description: "Simplify your billing process with our integrated invoicing feature. Generate and send invoices directly from the platform, track payments, and manage your business's finances with ease."
    },
    {
        imgSrc: ClientManagement,
        altText: "card1",
        title: "Client Management",
        description: "Create detailed client profiles, track their appointment history, and manage their preferences seamlessly. Strengthen customer relationships and provide personalized experiences that keep them coming back."
    }
];

  return (
    <div className='main-featured-cards'>
   <div className='featured-heading'>
    <h2>Enhanced Business Operations</h2>
    <p>Elevate your business's efficiency with our comprehensive business management solution, covering all aspects from booking to reporting.</p>
   </div>
   <div className='feature-cards'>
    {featuredCards.map((item,id)=>(
      <div key={id} className='featured-card-wrap'>
      <img src={item.imgSrc}  alt="card1" className='featured-card-img' />
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    ))}
       

   
   </div>
    </div>
  )
}

export default FeaturedCards