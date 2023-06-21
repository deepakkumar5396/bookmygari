import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../Assets/Blogo.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoWrapper>
        <LogoImage src={Logo} alt="Xanadu Logo" />
      </LogoWrapper>
      <IconsWrapper>
        <IconLink href="https://www.linkedin.com/company/bookmygari/?viewAsMember=true" target={"_blank"}>
          <FaLinkedin color="white" />
        </IconLink>
        <IconLink href="https://www.facebook.com" target={"_blank"}>
          <FaFacebook color="white" />
        </IconLink>
        <IconLink href="https://mobile.twitter.com" target={"_blank"}>
          <FaTwitter color="white" />
        </IconLink>
        <IconLink href="https://www.instagram.com" target={"_blank"}>
          <FaInstagram color="white" />
        </IconLink>
      </IconsWrapper>
      <CopyWrapper>
        <CopyText>&copy; COPYRIGHT 2023. BookMyGari.com</CopyText>
      </CopyWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding: 20px;
  border-top: 1px solid #ccc;

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
  }

  @media(min-width: 768px) {
  .FooterContainer {
    flex-direction: row;
  }

  .LogoWrapper {
    margin-bottom: 0;
    margin-right: auto;
    margin-left: 0;
  }

  .IconsWrapper {
    margin-bottom: 0;
  }

  .CopyWrapper {
    margin-left: auto;
  }

  .CopyText {
    font-size: 14px;
  }
}
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const LogoImage = styled.img`
  height: 50px;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const IconLink = styled.a`
  margin-right: 15px;
`;

const CopyWrapper = styled.div`
  color: white;
  text-align: center;
`;

const CopyText = styled.span`
  font-size: 12px;
`;


