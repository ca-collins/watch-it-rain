import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  .logo {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }
`;

const Header = () => (
  <StyledHeader>
    <h1 className="logo">Watch it rain</h1>
  </StyledHeader>
);

export default Header;
