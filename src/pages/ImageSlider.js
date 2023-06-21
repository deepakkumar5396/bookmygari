import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Picture1 from '../Assets/Car.jpg';
import Picture2 from '../Assets/Auto.jpg';
import Picture3 from '../Assets/Truck2.jpg';
import Picture4 from '../Assets/Car2.jpg';

const images = [
  {
    src: Picture1, title: 'Get the Best Guaranteed Booking Rates in the Market'
  },
  {
    src: Picture2, title: 'Enjoy an Enhanced Customer Experience with Our Rental Services'
  },
  {
    src: Picture3, title: 'Continuous Support Available for All Your Booking Needs'
  },
  {
    src: Picture4, title: 'Contact Us to Book Your Rental or Fill Out Our Convenient Form'
  },
];


const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <SliderContainer>
            <SliderImage
              src={images[activeIndex].src}
              alt={images[activeIndex].title}
            />
          </SliderContainer>
        </Left>
        <Right>
          <SliderTitle>{images[activeIndex].title}</SliderTitle>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Left = styled.div``
const Right = styled.div``

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  box-shadow: -4px 1px 27px 0px rgba(0, 0, 0, 0.51);
`;

const SliderImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 500px;
  object-fit: contain;
  border-radius: 5px;
`;

const SliderTitle = styled.div`
  font-size: 1.5rem;
  color: black;
  font-weight: 700;
    @media (max-width: 768px) {
   margin-bottom: 20px;
  }
`;

export default ImageSlider;
