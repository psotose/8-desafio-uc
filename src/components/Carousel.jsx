import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";

import img1 from '../assets/pc-1.jpeg';
import img2 from '../assets/pc-2.jpeg';
import img3 from '../assets/pc-3.jpeg';
import img4 from '../assets/pc-4.jpeg';

const Carousel = () => {
  return (
    <>
    <Swiper 
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide><img src={img1} alt="Primera imágen corporativa"/></SwiperSlide>
      <SwiperSlide><img src={img2} alt="Segunda imágen corporativa"/></SwiperSlide>
      <SwiperSlide><img src={img3} alt="Tercera imágen corporativa"/></SwiperSlide>
      <SwiperSlide><img src={img4} alt="Cuarta imágen corporativa"/></SwiperSlide>

    </Swiper>
    </>
  )
};

export default Carousel;
