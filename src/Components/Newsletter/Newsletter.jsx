import React from 'react'
import '../../Components/Newsletter/newsletter.css';
const Newsletter = () => {
  return (
    <div className='main-news-letter'>
    <div className='wrapper'>
        <div className='news-letter'>
         <h2>Trusted Salon Management</h2>
         <p>Ready to get started? <br/>Enter your email to contact us!</p>
         <input type="email" placeholder='Enter your email...' />
         <button className='get-started-btn'>Get Started</button>
        </div>
       
        {/* <div className='black-box'>
        
        </div> */}
        {/* <div className='dots-bg'>
        <svg class="absolute -ml-3 top-8 left-1/2" width="404" height="392" fill="none" viewBox="0 0 404 392" data-v-159be56a=""><defs data-v-159be56a=""><pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" data-v-159be56a=""><rect x="0" y="0" width="4" height="4" class="text-primary/10 dark:text-primary/30" fill="currentColor" data-v-159be56a=""></rect></pattern></defs><rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" data-v-159be56a=""></rect></svg>
        </div> */}
    </div>
   

    </div>
  )
}

export default Newsletter