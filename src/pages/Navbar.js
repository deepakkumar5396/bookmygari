import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Logo from "../Assets/Blogo.png";
// import Logo from "../Assets/footerImage.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });


  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <NavbarWrapper>

        <NavbarLogo href="/"><LogoImage src={Logo} alt="BookMyGari.com Logo" /></NavbarLogo>
        {isMobile ? (
          <NavbarToggle onClick={handleToggle}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </NavbarToggle>
        ) : (
          <NavbarMenu>
            <NavbarItem>
              <NavbarLink href="/">Home</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="/about">About</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="/contact">Contact</NavbarLink>
            </NavbarItem>
            {/* <NavbarItem>
              <NavbarLink href="/contactus">Contact</NavbarLink>
            </NavbarItem> */}
          </NavbarMenu>
        )}
      </NavbarWrapper>
      {isMobile && isOpen && (
        <NavbarMenuMobile>
          <NavbarItem>
            <NavbarLink href="/">Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="/about">About</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="/contact">Contact</NavbarLink>
          </NavbarItem>
        </NavbarMenuMobile>
      )}
    </NavbarContainer>
  );
};

export default Navbar;


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  height: 70px;
    box-shadow: -4px 1px 17px 0px rgba(0, 0, 0, 0.51);
    z-index: 999;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const NavbarLogo = styled.a`
  color: #333;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
`;

const NavbarToggle = styled.div`
  color: #333;
  font-size: 2rem;
  cursor: pointer;
`;

const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavbarItem = styled.li`
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const NavbarLink = styled.a`
  color: #ddd;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    border: 1px solid yellow;
  }
`;

const NavbarMenuMobile = styled.ul`
  position: absolute;
  top: 52px;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  list-style: none;
  z-index: 999;
`;

const LogoImage = styled.img`
  height: 50px;
`;