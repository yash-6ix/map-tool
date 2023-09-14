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
`;


const MainTitle: React.FC<{children:string}> = ({children}) => {
  return (
    <Title>{children}</Title>
  );
};

export default MainTitle;