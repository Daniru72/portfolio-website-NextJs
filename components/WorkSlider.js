// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};




//import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

//import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';


//icons
import {BsArrowRight} from "react-icons/bs";


//import required modules
import { Pagination } from 'swiper';



const WorkSlider = () => {
  return(

    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[ Pagination]}
      className="h-[280px] sm:h-[480px]"
    
    >

      {workSlides.slides.map((slide, index) => {
        return(
            <SwiperSlide key={index} >
               slide
            </SwiperSlide>
        );
      })}

    </Swiper>


  );
};

export default WorkSlider;
