'use client'

import React from 'react';
import styled from 'styled-components';

const Title = styled.h1<{ $primary?: boolean; $responsive?:boolean }>`
  color: ${props => props.$primary ? "#FFF" : "#53565A"};
  /* Subtitle 1 */
  font-family: KievitOT;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.085px;

  @media (max-width: 576px) { /* Change the value based on your desired breakpoint */
    font-size: ${props => props.$responsive ? "12px" : "34px" }; /* Change the font size for smaller devices */
    letter-spacing:0.085px
  }
`;


const SubTitle: React.FC<{children:any, active:boolean, page?:boolean}> = ({children, active, page}) => {
  return (
    <>
      <Title $primary={active} $responsive={page}>{children}</Title>
    </>
  );
};

export default SubTitle;