import React from "react";
import styled from "styled-components";

import lap from "./lap.jpg";
import lap1 from "./lap2.jpg";
import lap2 from "./lap3.jpg";

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  img {
    width: 400px;
    height: 400px;
    margin-bottom: 20px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const DescriptionContainer = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const ProductHeading = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const BuyButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  align-items: center;
`;

const Product = () => {
  return (
    <ProductContainer>
      <ImagesContainer>
        <img src={lap} alt="image" />
        <img src={lap1} alt="image" />
      </ImagesContainer>
      <DescriptionContainer>
        <ProductHeading>Dell Inspiron 5620 Laptop</ProductHeading>
        <ProductDescription>
          <br />
          Brand : Dell
          <br />
          Model Name : Inspiron 5620
          <br />
          Screen Size : 16
          <br />
          Colour : Platinum Silver
          <br />
          Hard Disk Size : 512 GB
          <br />
          CPU Model Core : i7
          <br />
          RAM Memory Installed Size : 16 GB
          <br />
          Operating System : Windows 11
          <br />
          Special Feature : Fingerprint Reader, Backlit Keyboard
          <br />
          Graphics Card Description Dedicated
          <br />
          Processor: i7-1255U (3.50 GHz up to 4.70 GHz) 12MB Cache, 10 Cores
          <br />
          RAM & Storage: 16GB DDR4, 512GB SSD
          <br />
          Graphics & Display: NVIDIA GeForce MX570 (2GB GDDR6), 16.0" FHD+ WVA
          AG 250 nits with CompfortView
          <br />
          Keyboard & Warranty: Backlit Keyboard + Fingerprint Reader, 1 Year
          Onsite Hardware Service
          <br />
          USB & Ports: 2 USB 3.2 Gen 1, 1 USB 3.2 Gen 2 Type-C port with
          DisplayPort 1.4 and Power Delivery, 1 HDMI 1.4, 1 SD Card slot, 1
          headset jack
        </ProductDescription>
        <BuyButton>Buy Now</BuyButton>
      </DescriptionContainer>
    </ProductContainer>
  );
};

export default Product;
