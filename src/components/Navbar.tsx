// components/Navbar.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: #333;
  padding: 1rem;
  z-index: 1000;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: bold;
  &:hover {
    color: #f0f0f0;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
