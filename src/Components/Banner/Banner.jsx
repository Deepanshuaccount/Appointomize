  import React from 'react'
  import female from '../../assets/female-19.png';
  import '../../Components/Banner/banner.css';
  const Banner = () => {
    return (
      <div className='main-banner'>
      <div className='wrapper'>
      <div className='side-dots'>
      <svg className="absolute transform top-full right-full translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2 rotate-3" width="404" height="404" fill="none" viewBox="0 0 404 404" role="img" aria-labelledby="svg-squares"><title id="svg-squares">squares</title><defs><pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-primary" fill="currentColor"></rect></pattern></defs><rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"></rect></svg>
      </div>
      <div className='banner'>
          <p className='banner-heading'>"AppoinitimiZe has revolutionized how we run our salon."</p>
          <p className='writer'><img src={female} alt="Ellie-img" className='ellie-img round-border' />Ellie Nelson</p>
      </div>

      </div>
    </div>
    )
  }

  export default Banner