// components/Logo.tsx
import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

const LogoImage = styled.img`
  width: 100px;
`;

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoImage src="/path-to-your-logo.png" alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;
