import React from "react";
import styled from "styled-components";
import logo from "./logo.png";
const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  background-color: #f0f0f0; /* Greyish color */
  padding: 0 20px;
`;

const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  position: relative;
  padding: 10px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px; /* Adjust the spacing between NavItems */
  }

  &:hover::after,
  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: #007bff; /* Blue color for the line */
    transform-origin: 50%;
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const SearchBar = styled.input`
  flex-grow: 1; /* Takes available space */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 20px; /* Adjust the spacing between SearchBar and NavItemsContainer */
  &:hover::after,
  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: #007bff; /* Blue color for the line */
    transform-origin: 50%;
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
  &:focus {
    outline: none;
    border-color: #007bff; /* Highlight border color when focused */
  }
`;

const ImageContainer = styled.div``;

const Navbar = () => {
  return (
    <NavbarContainer>
      <ImageContainer>
        {/* Your image component goes here */}
        <img src={logo} alt="Logo" width="80px" />
      </ImageContainer>
      <SearchBar placeholder="Search" />
      <NavItemsContainer>
        <NavItem>Home</NavItem>
        <NavItem>Laptop</NavItem>
        <NavItem>PCs</NavItem>
        <NavItem>Accessories</NavItem>
        <NavItem>About Us</NavItem>
      </NavItemsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
