//import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

//import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';


// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


//import required modules
import { Pagination, FreeMode } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Crafting memorable brand identities — logos, color systems, typography, and style guides that communicate your vision and build lasting recognition.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creating visually compelling UI/UX designs with Figma, Adobe XD, and Photoshop — from wireframes and prototypes to pixel-perfect final assets.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building fast, responsive, and scalable web applications using React, Next.js, Node.js, and modern full-stack technologies tailored to your goals.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Writing clear, persuasive, and SEO-friendly copy for websites, landing pages, and marketing materials that engage your audience and drive conversions.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Boosting your online visibility through technical SEO, on-page optimization, performance tuning, and content strategy to drive organic traffic growth.',
  },
];

const ServiceSlider = () => {
  return(

    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween:15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    
    >

      {serviceData.map((item, index) => {
        return(
            <SwiperSlide key={index} >
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg p-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-accent/10 transition-all duration-300'>
                {/* icon */}
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                {/* title & description */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <div className='max-w-[350px]'>{item.description}</div>
                </div>
                {/* arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
                </div>
              </div>
            </SwiperSlide>
        );
      })}

    </Swiper>


  );
};

export default ServiceSlider;
