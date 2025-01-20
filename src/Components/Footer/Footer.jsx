import React from 'react'
import { Link } from 'react-router-dom';
import '../Footer/footer.css';
const Footer = () => {
  return (
    <div className='main-footer'>
    <div className='wrapper'>
        <div className='footer'>
        <div className='footer-wrap'>
        <ul>
            <li><Link to="/" target="_top"> Home</Link></li>
            <li><Link to="/features" target="_top">Features</Link></li>
            <li><Link to="/pricing" target="_top">Pricing</Link></li>
            <li><Link to="/privacy-policy" target="top">Privacy Policy</Link></li>
            <Link to="/terms-and-conditions" target="_top"><li>Terms & Conditions</li></Link>
        </ul>
        </div>
        <div className='social-icons'>
       <Link to="https://www.facebook.com/AppointimiZe"> <svg viewBox="0 0 24 24" width="2.0em" height="2.0em" class="h-6 w-6"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"></path></svg></Link>
       <Link to="https://www.instagram.com/appointimize_salonsoftware?fbclid=IwZXh0bgNhZW0CMTAAAR2BPNyhfvCRjtnbdcmdmPxx5BX_egc82vNzyvCM_7LXiMy_XbPaUkWc0kQ_aem_CRmJFdR9XWLXB0VuskhnRA">  <svg viewBox="0 0 24 24" width="2.0em" height="2.0em" class="h-6 w-6"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"></path></svg></Link>
       <Link to="https://www.linkedin.com/showcase/appointimize/?lipi=urn%3Ali%3Apage%3Ad_flagship3_showcase%3BAFnRXY2jQjm53mDNQB2oLg%3D%3D"> <svg viewBox="0 0 24 24" width="2.0em" height="2.0em" class="h-6 w-6"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"></path></svg></Link>
        </div>
        <div className='reserved-text'>
        <p>© All rights reserved.</p>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Footer