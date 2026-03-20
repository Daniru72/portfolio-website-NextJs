// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'E-Commerce Platform',
          description: 'A full-stack e-commerce web application with product management, cart functionality, and payment integration built with Next.js and Node.js.',
          category: 'Web Development',
          tools: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
          path: '/thumb1.jpg',
          link: '/',
        },
        {
          title: 'Portfolio Website',
          description: 'A modern, animated personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion to showcase projects and skills.',
          category: 'UI/UX Design & Development',
          tools: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
          path: '/thumb2.jpg',
          link: '/',
        },
        {
          title: 'Dashboard UI',
          description: 'An analytics dashboard with interactive charts, real-time data visualization, and responsive design for business intelligence insights.',
          category: 'UI/UX Design',
          tools: ['React', 'Chart.js', 'Figma', 'Tailwind CSS'],
          path: '/thumb3.jpg',
          link: '/',
        },
        {
          title: 'Mobile Banking App',
          description: 'A clean and intuitive mobile banking app UI/UX design featuring account management, transactions, and budgeting tools.',
          category: 'UI/UX Design',
          tools: ['Figma', 'Adobe XD', 'Photoshop'],
          path: '/thumb4.jpg',
          link: '/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Brand Identity System',
          description: 'A comprehensive brand identity design including logo, typography, color palette, and style guide for a technology startup.',
          category: 'Branding',
          tools: ['Illustrator', 'Photoshop', 'Figma'],
          path: '/thumb4.jpg',
          link: '/',
        },
        {
          title: 'Restaurant Booking Platform',
          description: 'A restaurant reservation and ordering platform with real-time table availability, menu management, and SMS notifications.',
          category: 'Web Development',
          tools: ['React', 'Express', 'PostgreSQL', 'Twilio'],
          path: '/thumb1.jpg',
          link: '/',
        },
        {
          title: 'SaaS Landing Page',
          description: 'A high-converting SaaS product landing page with engaging animations, clear value propositions, and optimized call-to-action sections.',
          category: 'UI/UX Design & Development',
          tools: ['Next.js', 'Framer Motion', 'Figma'],
          path: '/thumb2.jpg',
          link: '/',
        },
        {
          title: 'Social Media App',
          description: 'A full-featured social networking application with real-time messaging, post feeds, notifications, and user profile management.',
          category: 'Web Development',
          tools: ['React', 'Firebase', 'Node.js', 'Socket.io'],
          path: '/thumb3.jpg',
          link: '/',
        },
      ],
    },
  ],
};




//import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

//import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';


//icons
import {BsArrowRight} from "react-icons/bs";


//import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';



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
               <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, index) => {
                  return(
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                       <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* image */}
                          <Image src={image.path} width={500} height={300} alt={image.title} />
                          {/* overlay gradiant */}
                          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-black/60 to-black opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                          {/* title & project link */}
                          <div className='absolute bottom-0 translate-y-full group-hover:xl:-translate-y-10 transition-all duration-300 px-2 w-full'>
                            <div className='text-[12px] font-semibold tracking-[0.1em] mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 truncate'>{image.title}</div>
                            <div className='flex items-center gap-x-2 text-[11px] tracking-[0.2em]'>
                              {/* title part 1 */}
                              <div className='delay-100'>LIVE</div>
                              {/* title part 2 */}
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>

                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight/></div>
                            </div>
                          </div>
                       </div>
                    </div>
                   
                  );
                })}
               </div>
            </SwiperSlide>
        );
      })}

    </Swiper>


  );
};

export default WorkSlider;
