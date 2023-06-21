import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  line-height: 2rem;
  margin: 0 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0 1rem;
  }
`;

const About = () => {
  return (
    <Container>
      <Title>About BookMyGari.com</Title>
      <Description>At our rental service, we offer a wide selection of vehicles for rent, including cars, buses, trucks, and even autos for those who prefer automatic transmission. Whether you need transportation for a family vacation, a corporate event, or moving day, or even for a special occasion like a marriage party, we've got you covered. Our vehicles are well-maintained and regularly serviced to ensure maximum comfort and safety during your journey. We also offer flexible rental options, including daily, weekly, and monthly rentals, to suit your needs and budget. Our team of professional staff is always available to assist you with any questions or concerns you may have, and we strive to provide the highest level of customer service. Contact us today to book your vehicle and enjoy a hassle-free rental experience.</Description>
    </Container>
  )
}

export default About
