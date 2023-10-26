import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../public/IIITLlogo.png";
import styles from './ControlledCarousel.module.css'; 
import Slider from '../components/Slider.module.css'
import Image from "next/image";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=" bg-gray-300">
    <div className={Slider.container}>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className={Slider.sliderItem}>
        <Image
          src="/carousel1.jpeg"
          alt="First slide"
          className={styles.carouselImage}
          height={10} width={900} 
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item >
      <Carousel.Item className={Slider.sliderItem}>
        <Image
          src="/carousel2.jpeg"
          alt="Second slide"
          className={styles.carouselImage}
          height={20} width={800} 
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className={Slider.sliderItem}>
        <Image
          src="/carousel3.jpg"
          alt="Third Slide"
          className={styles.carouselImage}
          height={20} width={800} 
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default ControlledCarousel;
