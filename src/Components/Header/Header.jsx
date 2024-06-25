import React from 'react'
import Appointomize from '../../assets/Appointomize.svg';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../Menubar/HamburgerMenu';
const Header = () => {
  return (
      <div className='main-header'>
      <div className='wrapper'>
      <div className='wrap-header'>
   <Link to="/"><div className='appointomize-icon'>
   <p><img src={Appointomize} alt="Appointomize-icon" className='appointomize-icon' /></p>
   <span> AppointimiZe</span>
   
  
   </div></Link>
   <div className='header'>
   
    <ul className='home-items nav'>
      <li className='active'>  <Link to="/">Home</Link></li>
        <li className='active'><Link to="/features">Features</Link></li>
         <li className='active'> <Link to="/pricing"> Pricing</Link></li>
    </ul>
   </div>
   <div className='menubar'>
   <HamburgerMenu />
   </div>
   </div>
   </div>
   </div> 
  )
}

export default Header