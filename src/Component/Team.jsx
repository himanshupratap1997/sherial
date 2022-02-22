import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

export default function Team() {
  return (
    <div>

<h2  className='text-center sec-hand mt-5 mb-5'>Our Team</h2>
         <Swiper
        effect={"coverflow"}
        // loop={true}
        grabCursor={true}
        spaceBetween={50}
        initialSlide= {1}
        centeredSlides={2}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       
       <SwiperSlide>
        <img className='p-sty' src='./img/she.png'></img>
        <div className='position-absolute nameposition'>
       <p className='name'>Shweta Singh <br></br> <span className='founder'>Founder</span></p>
     
     </div>

     <div className='iconpositon'>
       <ul>
         <li><i class="fa-brands fa-linkedin-in"></i></li>
         <li><i class="fa-brands fa-twitter"></i></li>
         <li><i class="fa-brands fa-instagram"></i></li>
         <li><i class="fa-brands fa-facebook-f"></i></li>
       </ul>
     </div>
        </SwiperSlide>
        <SwiperSlide>
        <img className='p-sty' src='./img/she.png'></img>
        <div className='position-absolute nameposition'>
       <p className='name'>Shweta Singh <br></br> <span className='founder'>Founder</span></p>
     
     </div>

     <div className='iconpositon'>
       <ul>
         <li><i class="fa-brands fa-linkedin-in"></i></li>
         <li><i class="fa-brands fa-twitter"></i></li>
         <li><i class="fa-brands fa-instagram"></i></li>
         <li><i class="fa-brands fa-facebook-f"></i></li>
       </ul>
     </div>
        </SwiperSlide>
        <SwiperSlide>
        <img className='p-sty' src='./img/she.png'></img>
        <div className='position-absolute nameposition'>
       <p className='name'>Shweta Singh <br></br> <span className='founder'>Founder</span></p>
     
     </div>

     <div className='iconpositon'>
       <ul>
         <li><i class="fa-brands fa-linkedin-in"></i></li>
         <li><i class="fa-brands fa-twitter"></i></li>
         <li><i class="fa-brands fa-instagram"></i></li>
         <li><i class="fa-brands fa-facebook-f"></i></li>
       </ul>
     </div>
        </SwiperSlide>
        
      </Swiper>

    </div>
  )
}


