'use client'

import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #53565A;
  /* Subtitle 1 */
  font-family: KievitOT;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.085px;
`;


const SubTitle: React.FC<{children:string}> = ({children}) => {
  return (
    <>
      <Title>{children}</Title>
    </>
  );
};

export default SubTitle;