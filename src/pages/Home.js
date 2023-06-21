import React from "react";
import styled from "styled-components";
import Picture1 from "../Assets/BackGround.png";
import ImageSlider from "./ImageSlider";
import { useState } from 'react';

const Container = styled.div`
  min-height: 80vh;
  width: 100%;
  position: relative;
`;

const HomeImage = styled.img`
  height: 80vh;
  width: 100%;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  max-width: 350px;
  transform: translateY(-50%);
  color: black;
  z-index: 1;

  h1 {
    font-size: 42px;
    font-weight: 700;
    color: #00000;

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

const FormContainer = styled.div`
  position: absolute;
  top: 40%;
  right: 10%;
  background-color: #f2f2f2;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  z-index: 1;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    top: 70%;
    right: 0;
    left: 0;
    margin: auto;
  }
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #00000;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

const FormInput = styled.input`
  height: 30px;
  width: 350px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 12px;
  color: black;
  padding: 8px;
  background-color: transparent;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

const FormDropdown = styled.select`
  height: 40px;
  width: 350px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 16px;
  color: black;
  padding: 10px;
  background-color: transparent;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

const FormOption = styled.option`
  color: black;
  background-color: white;
`;

const Home = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [vehicle, setVehicle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      startDate,
      endDate,
      mobileNumber,
      name,
      address,
      vehicle,
    };
  
    // Store formData in local storage
    localStorage.setItem('bookingData', JSON.stringify(formData));
  
    // Clear form fields
    setStartDate('');
    setEndDate('');
    setMobileNumber('');
    setName('');
    setAddress('');
    setVehicle('');
  
    // Send formData to the backend using fetch
    // fetch('/api/booking', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };
  
  return (
    <>
      <Container>
        <HomeImage src={Picture1} />
        <TextContainer>
          <h1>
            "Book Your Car, Bus, Truck, or Auto for Transportation or Any
            Wedding Event"
          </h1>
        </TextContainer>
        <FormContainer>
      <FormTitle>Book Your Vehicle</FormTitle>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="start-date">Start Date:</label>
        <FormInput
          id="start-date"
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="end-date">End Date:</label>
        <FormInput
          id="end-date"
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <FormInput
          type="tel"
          placeholder="Mobile Number"
          pattern="[0-9]{10}"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <FormDropdown
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        >
          <FormOption value="Car">Car</FormOption>
          <FormOption value="Bus">Bus</FormOption>
          <FormOption value="Truck">Truck</FormOption>
          <FormOption value="Auto">Auto</FormOption>
        </FormDropdown>
        <button type="submit">Book Now</button>
      </Form>
    </FormContainer>
      </Container>

      <ImageSlider />
    </>
  );
};

export default Home;
