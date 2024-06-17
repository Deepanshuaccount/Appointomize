import React from 'react'
import Homepage from '../Components/Homepage/Homepage'
import Salonmanagement from '../Components/Salonmanagement/Salonmanagement'
import Banner from '../Components/Banner/Banner';
import '../Responsive/responsive.css';
import Newsletter from '../Components/Newsletter/Newsletter'
import SalonBanner from '../Components/Banner/SalonBanner';

const Home = () => {
  return (
  <>
  
     <Homepage />
    <Salonmanagement />
    <SalonBanner />
    {/* <Banner /> */}
   
    <Newsletter /> 
    </>
    )
}

export default Home