import React from 'react'
import Navbar from './Navbar'

const Heros = () => {
  return (
    
    <div id="home" className='min-h-screen, bg-no-repeat bg-[url(/self-profile.png)]  bg-cover '
    style={{backgroundSize:"30%" , backgroundPosition: " left 80px top 80px"}}>
      <Navbar />
    

      <div className='container grid lg:grid-cols-2 ha-[calc(100vh-60px)]:'>
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[120px] font-bold leading-tight flex justify-center">
          <div>
            <p data-aos="fade-up-right">Hi, I am</p>
            <p data-aos="fade-up-right">Nizakat</p>
            <p data-aos="fade-up-right">Ali</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heros
