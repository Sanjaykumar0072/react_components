import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Menu from '../componentMenu';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Carousal() {
  return (
    <>
      <Menu />
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={false}
        customTransition="all .100"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div><img src="/src/assets/images/img1.png" style={{ width: '250px', height: '200px', padding: '0 20px' }} /></div>
        <div><img src="/src/assets/images/img6.png" style={{ width: '250px', height: '200px', padding: '0 20px' }} /></div>
        <div><img src="/src/assets/images/img2.png" style={{ width: '250px', height: '200px', padding: '0 20px' }} /></div>
        <div><img src="/src/assets/images/img8.png" style={{ width: '250px', height: '200px', padding: '0 20px' }} /></div>
        <div><img src="/src/assets/images/img3.png" style={{ width: '250px', height: '200px', padding: '0 20px' }} /></div>
        <div><img src="/src/assets/images/img9.png" style={{ width: '250px', height: '200px', padding: '0 20px' }} /></div>
        <div><img src="/src/assets/images/img5.png" style={{ width: '250px', height: '200px', padding: '0 20px' }} /></div>
        <div><img src="/src/assets/images/img4.png" style={{ width: '250px', height: '200px', padding: '0 20px' }} /></div>
        <div><img src="/src/assets/images/img7.png" style={{ width: '250px', height: '200px', padding: '0 20px' }} /></div>
        <div><img src="/src/assets/images/img10.png" style={{ width: '250px', height: '200px', padding: '0 20px' }} /></div>
      </Carousel>
    </>
  )
}