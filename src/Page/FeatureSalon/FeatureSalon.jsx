import React from 'react'
import '../FeatureSalon/features.css';
import FeatureImg from '../../assets/key.jpg';
import FeatureHomebanner from '../../Components/FeaturedHomebanner/FeatureHomebanner';
import FeaturedCards from '../../Components/FeaturedCards/FeaturedCards';
import Salonoperations from '../../Components/SalonOperations/Salonoperations';
const FeatureSalon = () => {
  return (
    <>
    <FeatureHomebanner />
   
   <div className="Feature-img-wrap">
{/* <img src={FeatureImg} alt="feature-img"  className='Feature-img'/> */}
   </div>
   <FeaturedCards />
   <Salonoperations />
   </>
  )
}

export default FeatureSalon