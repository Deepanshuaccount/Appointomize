import React from 'react'
import '../../Components/Salonmanagement/saloon.css';
import '../../Responsive/responsive.css';
import {Data} from '../../Components/Salonmanagement/SaloonData';
const Salonmanagement = () => {
  return (
    <>
    <div className='header-container'>
    <h1>Business Management Made Easy</h1>
    <p>Simplify business operations with our all-in-one solution.</p>
</div>
{Data.map((item,id)=>(
 

  <div key={id} className={`section-wrap  ${item.class || ''}`}>
  <div className='section-wrap'>
<div className='img-wrap'>
 <img src={item.img} alt="reconciliation-img" className='recon-img' />
</div>
<div className='content-wrap'>
<h2>{item.heading2}</h2>
<p>{item.text}</p>
    
</div>
</div>
  
  </div>
  ))}
</>
  )}

export default Salonmanagement