import React from 'react'

export const Carousel = () => {
  return (
    <div className="carousel">
      <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img src="" alt="Primera imágen corporativa"></div>
            <div className="swiper-slide"><img src="/assets/img/pc-2.jpeg" alt="Segunda imágen corporativa"></div>
            <div className="swiper-slide"><img src="/assets/img/pc-3.jpeg" alt="Tercera imágen corporativa"></div>
            <div className="swiper-slide"><img src="/assets/img/pc-4.jpeg" alt="Cuarta imágen corporativa"></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
    </div>
  )
}
