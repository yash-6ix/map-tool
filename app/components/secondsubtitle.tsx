'use client'

import React from 'react';
import styled from 'styled-components';

const Title = styled.h1<{ $primary?: boolean; }>`
    color: #53565A;
    /* Heading 3 */
    font-family: KievitOT;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;


const SecondSubTitle: React.FC<{children:string, active:boolean}> = ({children, active}) => {
  return (
    <>
      <Title $primary={active}>{children}</Title>
    </>
  );
};

export default SecondSubTitle;