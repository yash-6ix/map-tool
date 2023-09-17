'use client'

import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: #53565A;
    font-family: KievitSlabWebW03-Bold;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;

    @media (max-width: 576px) { /* Change the value based on your desired breakpoint */
      font-size: 34px; /* Change the font size for smaller devices */
      letter-spacing:0.085px
    }
`;


const MainTitle: React.FC<{children:string}> = ({children}) => {
  return (
    <Title>{children}</Title>
  );
};

export default MainTitle;