// src/components/Navbar.tsx

import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

interface NavMenuProps {
  isOpen: boolean;
}

const NavbarContainer = styled.nav`
  width: calc(100% - 40px);
  height: 90px;
  backdrop-filter: blur(10px);

  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.5);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const LogoImage = styled.img`
  height: 80px;
  width: auto;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const NavMenu = styled.ul<NavMenuProps>`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
     
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const NavLinkStyled = styled(Link)<{ $isActive: boolean }>`
  color: #000;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px 15px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${({ $isActive }) =>
    $isActive &&
    `
    font-weight: bold;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
  `}

  &:hover {
    color: #000;
    box-shadow: 0 0 10px rgba(255, 99, 71, 0.7);
  }
`;

const ContactButton = styled.button`
  background: #13ef00;
  border: none;
  padding: 10px 20px;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  font-family: inter;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.5s ease-in-out;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    background: rgba(3, 132, 3, 1);
    transition: background-color 0.5s ease-in-out;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer className="sticky">
      <LogoContainer>
        <LogoImage src="/images/logo.webp" alt="Logo" />
      </LogoContainer>
      <HamburgerIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>
      <NavMenu isOpen={isOpen}>
        {["home", "join-us", "footprints", "resources", "events"].map(
          (item) => {
            const path = item === "home" ? "/" : `/${item}`;
            const isActive = location.pathname === path;

            return (
              <NavItem key={item}>
                <NavLinkStyled
                  to={path}
                  $isActive={isActive}
                  onClick={() => setIsOpen(false)}
                >
                  {item.charAt(0).toUpperCase() +
                    item.slice(1).replace("-", " ")}
                </NavLinkStyled>
              </NavItem>
            );
          }
        )}
        <NavItem>
          <ContactButton>
            <a href="/ContactUs">Contact Us</a>
          </ContactButton>
        </NavItem>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
