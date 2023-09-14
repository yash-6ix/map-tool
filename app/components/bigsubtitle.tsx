'use client'

import React from 'react';
import styled from 'styled-components';

const Title = styled.h1<{ $primary?: boolean; }>`
    color: #53565A;
    /* Subtitle 1 */
    font-family: KievitOT;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.085px;
`;


const BigSubTitle: React.FC<{children:any, active:boolean}> = ({children, active}) => {
  return (
    <>
      <Title $primary={active}>{children}</Title>
    </>
  );
};

export default BigSubTitle;