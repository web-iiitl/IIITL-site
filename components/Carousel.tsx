import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper'// Importing the CSS module

const Carousel = () => {
  return (
    <div className="mb-20 w-full m-auto bg-bluel cursor-pointer">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img
              src="https://ik.imagekit.io/cmef8hxb6/it3_m0GlC0BYh.png?updatedAt=1698615793014"
              alt="First slide"
              className={Carousel}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img
              src="https://ik.imagekit.io/cmef8hxb6/it1_o_lgch6Bd.png?updatedAt=1698615753254"
              alt="Second slide"
              className={Carousel}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;


// // import { useState } from "react";
// // import Carousel from "react-bootstrap/Carousel";
// // import Logo from "../public/IIITLlogo.png";
// // import styles from './ControlledCarousel.module.css'; 
// // import Slider from '../components/Slider.module.css'
// import Image from "next/image";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// // function ControlledCarousel() {
// //   const [index, setIndex] = useState(0);

// //   const handleSelect = (selectedIndex) => {
// //     setIndex(selectedIndex);
// //   };

// //   return(
// //     <div>
// //         <Swiper
// //         spaceBetween={30}
// //         centeredSlides={true}
// //         autoplay={{
// //           delay: 2500,
// //           disableOnInteraction: false,
// //         }}
// //         pagination={{
// //           clickable: true,
// //         }}
// //         navigation={true}
// //         modules={[Autoplay, Pagination, Navigation]}
// //         className="mySwiper"
// //       >
// //         <SwiperSlide>

// //         <Image
// //           src="/carousel1.jpeg"
// //           alt="First slide"
// //           className={styles.carouselImage}
// //           height={10} width={900} 
// //         />
// //         </SwiperSlide>

// //         <SwiperSlide>
// //         <Image
// //           src="/carousel2.jpeg"
// //           alt="Second slide"
// //           className={styles.carouselImage}
// //           height={20} width={800} 
// //         />
// //         </SwiperSlide>


// //         <SwiperSlide>
// //         <Image
// //           src="/carousel3.jpg"
// //           alt="Third Slide"
// //           className={styles.carouselImage}
// //           height={20} width={800} 
// //         />
// //         </SwiperSlide>


// //       </Swiper>

// //     </div>
// //   )

// //   return (
// //     <div className=" bg-gray-300">
// //     <div className={Slider.container}>
// //     <Carousel activeIndex={index} onSelect={handleSelect}>
// //       <Carousel.Item className={Slider.sliderItem}>


// //       </Carousel.Item >
// //       <Carousel.Item className={Slider.sliderItem}>

// //         {/* <Carousel.Caption>
// //           <h3>Second slide label</h3>
// //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// //         </Carousel.Caption> */}
// //       </Carousel.Item>
// //       <Carousel.Item className={Slider.sliderItem}>
// //         <Image
// //           src="/carousel3.jpg"
// //           alt="Third Slide"
// //           className={styles.carouselImage}
// //           height={20} width={800} 
// //         />
// //         {/* <Carousel.Caption>
// //           <h3>Third slide label</h3>
// //           <p>
// //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
// //           </p>
// //         </Carousel.Caption> */}
// //       </Carousel.Item>
// //     </Carousel>
// //     </div>
// //     </div>
// //   );
// // }

// // export default ControlledCarousel;


// import React from 'react'

// const Carousel = () => {
//   return (
//     <div className="mb-20  w-full  m-auto bg-bluel cursor-pointer">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
        
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="flex items-center justify-center">
//             <img
//               src="https://ik.imagekit.io/cmef8hxb6/it3_m0GlC0BYh.png?updatedAt=1698615793014"
//               alt="First slide"
//               style={{height:'500px',minWidth:'900px'}}
//             />
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="flex items-center justify-center">
//             <img
//               src="https://ik.imagekit.io/cmef8hxb6/it1_o_lgch6Bd.png?updatedAt=1698615753254"
//               alt="First slide"
//               style={{height:'500px',minWidth:'900px'}}
//             />
//           </div>
//         </SwiperSlide>

      


//       </Swiper>
//     </div>
//   )
// }

// export default Carousel

